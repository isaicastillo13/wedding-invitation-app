import "dotenv/config";
import * as XLSX from "xlsx";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../lib/generateToken";

const prisma = new PrismaClient();

const filePath = "data/guests.xlsx";

async function main() {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json<any>(sheet);

  const guests = rows
    .map((row) => {
      const name = String(row["Nombre"] || "").trim();
      const passes = Number(row["Cantidad de puestos"] || 0);
      const observation = String(row["Observación"] || "").toLowerCase();

      if (!name) return null;

      const isDeclined = observation.includes("no van");

      return {
        name,
        passes: isDeclined ? 0 : passes || 1,
        status: isDeclined ? "declined" : "pending",
        token: generateToken(),
      };
    })
    .filter(Boolean) as {
    name: string;
    passes: number;
    status: string;
    token: string;
  }[];

  console.log(`Invitados válidos: ${guests.length}`);

  await prisma.rSVP.deleteMany();
  await prisma.guest.deleteMany();

  await prisma.guest.createMany({
    data: guests,
  });

  console.log("BD actualizada correctamente.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });