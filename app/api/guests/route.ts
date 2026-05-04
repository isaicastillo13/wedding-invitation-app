import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/generateToken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, passes } = body;

  const token = generateToken();

  const guest = await prisma.guest.create({
    data: {
      name,
      phone,
      passes: passes || 1,
      token,
    },
  });

  return NextResponse.json(guest);
}