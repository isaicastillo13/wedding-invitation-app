import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const guests = await prisma.guest.findMany({
      include: {
        rsvp: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(guests);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error obteniendo invitados" },
      { status: 500 }
    );
  }
}