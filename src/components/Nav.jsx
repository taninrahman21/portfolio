import { useEffect, useState } from "react";
import { nav, person } from "../data";
import { ArrowUpRight, Menu } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#work");

  // highlight the section in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-bar">
        <a className="nav-brand" href="#top">Tanin<span>.</span></a>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href ? "on" : undefined}>{n.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href={`mailto:${person.email}`}>Let’s talk <ArrowUpRight /></a>
        <button className="nav-menu" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
      </div>
      {open && (
        <div className="menu-sheet" role="dialog" aria-label="Menu">
          <button className="menu-close" type="button" onClick={() => setOpen(false)}>Close</button>
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href={`mailto:${person.email}`} onClick={() => setOpen(false)}>Let’s talk ↗</a>
        </div>
      )}
    </header>
  );
}
