import { Cta } from "@/components/global/cta";
import { LogoStrip } from "@/components/global/logo-stripe";
import { Header } from "@/features/home/components/header";
import { About } from "@/features/home/sections/about";
import { Hero } from "@/features/home/sections/hero";
import { Products } from "@/features/home/sections/products";
import { Projects } from "@/features/home/sections/projects";
import { Services } from "@/features/home/sections/services";

export default async function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Header>Services</Header>
      <Services />
      <Header>Products</Header>
      <Products />
      <LogoStrip />
      <Projects />
      <Cta />
    </main>
  );
}
