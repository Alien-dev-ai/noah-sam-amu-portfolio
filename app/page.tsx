import fs from "node:fs";
import path from "node:path";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import MoreProjects from "@/components/sections/MoreProjects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const hasPortrait = fs.existsSync(
    path.join(process.cwd(), "public", "images", "portrait.jpg")
  );
  const hasResume = fs.existsSync(
    path.join(process.cwd(), "public", "resume.pdf")
  );

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero hasPortrait={hasPortrait} hasResume={hasResume} />
        <About />
        <FeaturedProjects />
        <MoreProjects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
