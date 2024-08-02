import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { ThemeSwitcher } from "../components/ui/ThemeSwitcher";
import  {Navbar}  from "../components/ui/navbar";
import { navItems } from "@/data";
import ContactsBars from "@/components/ui/ContactsBars";

import TexturedMeshComponent from "@/components/ui/TexturedMesh";

export default function Home() {
  return (
    <main className = "relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="fixed top-0 -z-[10] w-screen h-screen dark:opacity-5 opacity-30">
      <TexturedMeshComponent />
      </div>
      <div className="w-screen">
        <ContactsBars />
        <Navbar navItems={navItems}  />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
    
  );
}


