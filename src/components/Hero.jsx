import { useState } from "react";
import { person, socials } from "../data";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "./Icons";

const link = (label) => socials.find((s) => s.label === label)?.href;

/* Hero H — the full-bleed photo that folds into a panel when you meet Tanin. */
export default function Hero() {
  const [open, setOpen] = useState(false);
  let n = 0;
  const letters = (word) =>
    [...word].map((ch) => (
      <span className="l" key={n}><span style={{ animationDelay: `${(0.35 + n++ * 0.045).toFixed(3)}s` }}>{ch}</span></span>
    ));

  return (
    <section id="top" className={`hero${open ? " open" : ""}`}>
      <div className="hero-photo">
        <img src={person.heroPhoto} srcSet={person.heroSrcset} sizes="100vw"
          width={person.heroSize.w} height={person.heroSize.h}
          fetchPriority="high" decoding="async"
          alt="Tanin Rahman sitting by a window in a white shirt and red striped tie" />
        <div className="hero-fade" aria-hidden="true" />
      </div>

      <h1 className="hero-name" aria-label={person.name}>
        {letters(person.first)}
        <span className="gap" /><br className="br" />
        {letters(person.last)}
      </h1>

      <div className="hero-poster" aria-hidden={open}>
        <div className="hero-topline"><span>{person.role.toLowerCase()} · {person.city.toLowerCase()}</span><span><i className="dot" />open to roles</span></div>
        <p className="hero-tag">Hand me a spec.<br />{" "}Get a shipped product.</p>
        <div className="hero-cta">
          <button className="hero-meet" type="button" onClick={() => setOpen(true)} tabIndex={open ? -1 : 0}>Meet Tanin <ArrowRight /></button>
          <div className="hero-links">
            <a className="hero-icon" href={link("GitHub")} target="_blank" rel="noreferrer" aria-label="GitHub" tabIndex={open ? -1 : 0}><Github /></a>
            <a className="hero-icon" href={link("LinkedIn")} target="_blank" rel="noreferrer" aria-label="LinkedIn" tabIndex={open ? -1 : 0}><Linkedin /></a>
            <a className="hero-resume" href={person.resume} download tabIndex={open ? -1 : 0}>Resume <Download /></a>
          </div>
        </div>
      </div>

      <div className="hero-open" aria-hidden={!open}>
        <span className="mono muted" style={{ fontSize: 13 }}>{person.role.toLowerCase()} · {person.city.toLowerCase()}</span>
        <p>{person.heroIntro}</p>
        <div className="hero-actions">
          <a className="btn" href="#work" tabIndex={open ? 0 : -1}>See the releases</a>
          <a className="hero-resume" href={person.resume} download tabIndex={open ? 0 : -1}>Resume <Download /></a>
          <a className="text-link" href="#contact" tabIndex={open ? 0 : -1}>Hire me <ArrowUpRight /></a>
        </div>
        <button className="hero-back-m" type="button" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><ArrowLeft />Back to photo</button>
      </div>

      <button className="hero-back" type="button" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><ArrowLeft />Back</button>
    </section>
  );
}
