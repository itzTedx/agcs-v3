import { Header } from "@/features/home/components/header";
import { About } from "@/features/home/sections/about";
import { Hero } from "@/features/home/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Header>Services</Header>
    </main>
  );
}
