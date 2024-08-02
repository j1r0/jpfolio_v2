import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaUser } from "react-icons/fa";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Contacts from "@/components/Contacts";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-screen">
        <FloatingNav 
        navItems={navItems}
        />
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
