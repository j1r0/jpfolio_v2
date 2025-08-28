"use router"
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import About from "@/components/about";
import ContactsBars from "@/components/ui/ContactsBars";
import Footer from "@/components/footer";
import TexturedMeshComponent from "@/components/ui/TexturedMesh";
import { navItems } from "@/data/index";


export default function Page() {
  return (
    <main className = "relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 " title="About" id="#about">
      <div className="fixed top-0 -z-[10] w-screen h-screen dark:opacity-5 opacity-30">
      <TexturedMeshComponent />
      </div>
      <div className="w-screen">
        <ContactsBars />
        <Navbar navItems={navItems}  />
        <div className="py-10">
          <About />
        </div>
        <Footer />
      </div>
    </main>
    
  );
}