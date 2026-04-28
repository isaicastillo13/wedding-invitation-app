import Hero from "@/components/invitation/Hero";
import Intro from "@/components/invitation/Intro";
import Countdown from "@/components/invitation/Countdown";
import EventDetails from "@/components/invitation/EventDetails";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Countdown />
      <EventDetails />
    </main>
  );
}