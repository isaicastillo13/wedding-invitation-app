import { prisma } from "@/lib/prisma";
import Hero from "@/components/invitation/Hero";
import Intro from "@/components/invitation/Intro";
import Countdown from "@/components/invitation/Countdown";
import EventDetails from "@/components/invitation/EventDetails";
import RSVP from "@/components/invitation/RSVP";
import Gifts from "@/components/invitation/Gifts";
import Closing from "@/components/invitation/Closing";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const guest = await prisma.guest.findUnique({
    where: { token },
  });

  if (!guest) {
    return (
      <main className="flex items-center justify-center min-h-screen px-6 text-center bg-wedding-light text-wedding-dark">
        <div>
          <h1 className="font-serif text-3xl">Invitación no encontrada</h1>
          <p className="mt-4 text-sm text-wedding-dark/70">
            Verifica que el enlace sea correcto.
          </p>
        </div>
      </main>
    );
  }

  if (!guest.hasOpened) {
    await prisma.guest.update({
      where: { id: guest.id },
      data: {
        hasOpened: true,
        openedAt: new Date(),
        status: "opened",
      },
    });
  }

  return (
    <main>
      <Hero />
      <Intro />
      <Countdown />
      <EventDetails />
      <RSVP guest={guest} />
      <Gifts />
      <Closing />
    </main>
  );
}