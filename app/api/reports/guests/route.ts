import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const guests = await prisma.guest.findMany({
      include: {
        rsvp: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    const report = guests.map((guest) => ({
      nombre: guest.name,
      puestosAsignados: guest.passes,
      estado: guest.status,
      abrioInvitacion: guest.hasOpened ? "Sí" : "No",
      fechaApertura: guest.openedAt,
      asistencia: guest.rsvp
        ? guest.rsvp.attending
          ? "Sí"
          : "No"
        : "Sin respuesta",
      puestosConfirmados: guest.rsvp?.attendeesCount ?? 0,
      mensaje: guest.rsvp?.message ?? "",
      fechaRespuesta: guest.rsvp?.createdAt ?? null,
      token: guest.token,
      link: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/i/${guest.token}`,
    }));

    return NextResponse.json(report);
  }   catch (error) {
    console.error("REPORT_ERROR:", error);

    return NextResponse.json(
      {
        error: "Error generando reporte",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}