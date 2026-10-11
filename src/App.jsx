import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Capabilities, Contact, Courses, Experience, Footer, Recommendations, Releases, Skills, Spotlight, Statement } from "./components/Sections";

export default function App() {
  // fade blocks in as they scroll into view
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Spotlight />
        <Statement />
        <About />
        <Capabilities />
        <Experience />
        <Skills />
        <Courses />
        <Releases />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
