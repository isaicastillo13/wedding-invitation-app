type SheetPayload = {
  Nombre: string;
  "Puestos Asignados": number;
  Estado: string;
  "Abrio Invitacion": string;
  "Fecha Apertura": string;
  Asistencia: string;
  "Puestos Confirmados": number;
  Mensaje: string;
  "Fecha Respuesta": string;
  Token: string;
  Link: string;
};

export async function syncGoogleSheet(payload: SheetPayload) {
  const url = process.env.GOOGLE_SCRIPT_URL;

  if (!url) {
    console.warn("GOOGLE_SCRIPT_URL no está configurada");
    return;
  }

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}