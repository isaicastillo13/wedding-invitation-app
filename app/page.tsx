import Hero from "@/components/invitation/Hero";
import Intro from "@/components/invitation/Intro";
import EventDetails from "@/components/invitation/EventDetails";
import Moments from "@/components/invitation/Moments";
import Gifts from "@/components/invitation/Gifts";
import Closing from "@/components/invitation/Closing";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <EventDetails />
      <Moments />
      <Gifts />
      <Closing />
    </main>
  );
}