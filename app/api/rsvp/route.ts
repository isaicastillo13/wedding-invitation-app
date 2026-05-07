import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { syncGoogleSheet } from "@/lib/syncGoogleSheet";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { guestId, attending, attendeesCount, message } = body;

    if (!guestId) {
      return NextResponse.json(
        { error: "guestId es requerido" },
        { status: 400 },
      );
    }

    const guest = await prisma.guest.findUnique({
      where: { id: guestId },
      include: { rsvp: true },
    });

    if (!guest) {
      return NextResponse.json(
        { error: "Invitado no encontrado" },
        { status: 404 },
      );
    }

    if (attending && attendeesCount > guest.passes) {
      return NextResponse.json(
        { error: `Solo tienes ${guest.passes} pase(s) disponible(s).` },
        { status: 400 },
      );
    }

    const rsvp = await prisma.rSVP.upsert({
      where: { guestId },
      update: {
        attending,
        attendeesCount: attending ? attendeesCount : 0,
        message,
      },
      create: {
        guestId,
        attending,
        attendeesCount: attending ? attendeesCount : 0,
        message,
      },
    });

    await prisma.guest.update({
      where: { id: guestId },
      data: {
        status: attending ? "confirmed" : "declined",
        confirmedAt: attending ? new Date() : null,
        declinedAt: attending ? null : new Date(),
      },
    });

    await syncGoogleSheet({
      Nombre: guest.name,
      "Puestos Asignados": guest.passes,
      Estado: attending ? "confirmed" : "declined",
      "Abrio Invitacion": guest.hasOpened ? "Sí" : "No",
      "Fecha Apertura": guest.openedAt ? guest.openedAt.toISOString() : "",
      Asistencia: attending ? "Sí" : "No",
      "Puestos Confirmados": attending ? attendeesCount : 0,
      Mensaje: message || "",
      "Fecha Respuesta": new Date().toISOString(),
      Token: guest.token,
      Link: `${process.env.NEXT_PUBLIC_APP_URL}/i/${guest.token}`,
    });

    return NextResponse.json({
      success: true,
      rsvp,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error guardando RSVP" },
      { status: 500 },
    );
  }
}
