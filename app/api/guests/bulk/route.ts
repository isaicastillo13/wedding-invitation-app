import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/generateToken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "El body debe ser un array" },
        { status: 400 }
      );
    }

    const guests = body.map((guest) => ({
      name: guest.name,
      passes: guest.passes || 1,
      token: generateToken(),
    }));

    const result = await prisma.guest.createMany({
      data: guests,
    });

    return NextResponse.json({
      success: true,
      inserted: result.count,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error creando invitados" },
      { status: 500 }
    );
  }
}