import { useEffect, useRef, useState } from "react";
import { about, capabilities, contact, courses, experience, nav, person, recommendations, releases, skills, socials, spotlight, statement } from "../data";
import { palette, pick } from "../theme";
import { ArrowRight, ArrowUp, ArrowUpRight, Check, Github } from "./Icons";
import Motif from "./Motif";

const Label = ({ n, children }) => (
  <span className="label"><b>{n}</b><i />{children}</span>
);

/* Wraps the phrases listed in `accents` so they pick up the highlight colour. */
const accent = (text, phrases = []) => {
  let parts = [text];
  for (const ph of phrases) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string" || !part.includes(ph)) return [part];
      return part.split(ph).flatMap((bit, i) => (i === 0 ? [bit] : [<b key={ph + i}>{ph}</b>, bit]));
    });
  }
  return parts;
};

/* The product I own end to end, given a section of its own. */
export function Spotlight() {
  const pal = palette();
  return (
    <section id="spotlight" className="spot">
      <div className="spot-copy">
        <Label n="01">Featured work · built &amp; owned by me</Label>
        <div className="spot-head">
          <img src={person.pluginIcon} alt="" />
          <h2>{spotlight.name}</h2>
        </div>
        <p className="spot-tagline">{spotlight.tagline}</p>
        <p className="spot-blurb">{accent(spotlight.blurb, spotlight.accents)}</p>
        <div className="tags">{spotlight.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="spot-actions">
          <a className="btn" href={spotlight.source} target="_blank" rel="noreferrer"><Github /> View the source</a>
          <a className="spot-link" href={spotlight.directory} target="_blank" rel="noreferrer">On WordPress.org <ArrowUpRight /></a>
        </div>
      </div>

      <div className="spot-panel">
        <div className="spot-count">
          <b>{spotlight.count}</b>
          <span>{spotlight.countLabel.map((l, i) => <span key={l}>{i ? <br /> : null}{l}</span>)}</span>
        </div>
        <div className="spot-grid">
          {spotlight.features.map((f, i) => (
            <article className="spot-card reveal" key={f.title}>
              <b><i className="dot" style={{ background: pick(pal.spotDots, i) }} />{f.title}</b>
              <span>{f.body}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Words light up as the block scrolls through the screen. */
export function Statement() {
  const ref = useRef(null);
  const words = statement.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = [...el.querySelectorAll("span")];
    let raf = 0, seen = false, last = -1;
    const paint = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25)));
      const lit = Math.round(spans.length * Math.min(1, p * 1.25));
      if (lit === last) return;
      last = lit;
      spans.forEach((s, i) => s.classList.toggle("lit", i < lit));
    };
    const onScroll = () => { if (seen && !raf) raf = requestAnimationFrame(paint); };
    /* only measure while the block is anywhere near the screen */
    const io = new IntersectionObserver(([e]) => { seen = e.isIntersecting; if (seen) onScroll(); }, { rootMargin: "300px 0px" });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="statement" ref={ref}>
      <p>{words.map((w, i) => <span key={i}>{w} </span>)}</p>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section wrap about">
      <figure className="reveal">
        <div className="about-photo"><img src={person.portrait} srcSet={person.portraitSrcset}
          sizes="(max-width: 900px) calc(100vw - 40px), 520px"
          width={person.portraitSize.w} height={person.portraitSize.h}
          alt="Portrait of Tanin Rahman" loading="lazy" decoding="async" /></div>
        <figcaption><span>{person.city}</span><span><i className="dot" />Open to roles</span></figcaption>
      </figure>
      <div className="about-copy">
        <Label n="02">About</Label>
        <h2 className="h2">{about.title}</h2>
        {about.paragraphs.map((p) => <p key={p.slice(0, 16)}>{p}</p>)}
        <div className="principles">
          {about.principles.map((c) => <div key={c.title}><b>{c.title}</b><span>{c.body}</span></div>)}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const pal = palette();
  return (
    <section id="skills" className="caps">
      <div className="caps-head">
        <div><Label n="03">What I can do</Label><h2>{capabilities.title}</h2></div>
        <div className="caps-stats">
          {capabilities.stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
        </div>
      </div>
      <div className="caps-grid">
        {capabilities.items.map((c, i) => (
          <div className="cap reveal" key={c.title}>
            <span className="check" style={{ background: pick(pal.capDots, i) }}><Check /></span>
            <div>
              <b>{c.title}</b>
              <span>{c.body}</span>
              {c.proof && <a className="proof" href={c.proof.href} target="_blank" rel="noreferrer"><img src={person.pluginIcon} alt="" />{c.proof.label} <ArrowUpRight /></a>}
            </div>
          </div>
        ))}
      </div>
      <p className="caps-note"><i className="dot" />{capabilities.note}</p>
    </section>
  );
}

export function Experience() {
  const pal = palette();
  return (
    <section id="experience" className="section wrap split">
      <div className="split-head">
        <Label n="04">Experience</Label>
        <h2 className="h2">Where the hours went.</h2>
        <p className="lead">One team, eight products, the whole lifecycle — since 2023.</p>
      </div>
      <div className="split-body timeline">
        {experience.map((job) => (
          <div className="job reveal" key={job.company}>
            <article className="job-card">
              <div className="job-top"><span className="pill">{job.period}</span><span>{job.type}</span></div>
              <div><h3>{job.company}</h3><span className="job-role">{job.role}</span></div>
              <p className="job-sum">{job.summary}</p>
              <ul>{job.points.map((t, i) => <li key={i}><span className="check" style={{ background: pick(pal.jobDots, i) }}><Check /></span>{t}</li>)}</ul>
              <div className="tags">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          </div>
        ))}

      </div>
    </section>
  );
}

export function Skills() {
  const pal = palette();
  return (
    <section id="toolkit" className="section wrap split">
      <div className="split-head">
        <Label n="05">Skills</Label>
        <h2 className="h2">Tools I reach for, honestly grouped.</h2>
        <p className="lead">I’d rather be judged on what’s shipped than what’s listed. But if you’re scanning for keywords, here they are.</p>
      </div>
      <div className="split-body skills-grid">
        {skills.map((g, i) => (
          <div className="skill reveal" key={g.group} style={{ background: pick(pal.skillBg, i) }}>
            <div className="skill-head"><b>{g.group}</b><span>0{i + 1}</span></div>
            <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Drawn tile used when a course has no banner image yet. */
function CourseArt({ kind, a, b }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {kind === "circuit" ? (
        <g fill="none" stroke={a} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 60h80l30 30h70l30-30h70M20 140h60l30-30h40M190 150h40l30 30h40M160 20v50" />
          <circle cx="100" cy="60" r="9" fill={b} stroke="none" /><circle cx="230" cy="60" r="9" fill={a} stroke="none" />
          <circle cx="150" cy="110" r="9" fill={b} stroke="none" /><circle cx="190" cy="150" r="9" fill={a} stroke="none" />
          <circle cx="160" cy="20" r="9" fill={b} stroke="none" />
        </g>
      ) : (
        <g>
          {Array.from({ length: 40 }, (_, k) => {
            const x = 22 + (k % 8) * 38, y = 18 + Math.floor(k / 8) * 38, on = [3, 9, 12, 18, 21, 27, 30, 36].includes(k);
            return <rect key={k} x={x} y={y} width="26" height="26" rx="7" fill={on ? b : a} opacity={on ? 1 : 0.35} />;
          })}
        </g>
      )}
    </svg>
  );
}

export function Courses() {
  const pal = palette();
  if (!courses.length) return null;
  return (
    <section id="courses" className="section wrap split">
      <div className="split-head">
        <Label n="06">Courses</Label>
        <h2 className="h2">Courses I actually finished.</h2>
        <p className="lead">Where the fundamentals came from, before any of the products did.</p>
      </div>
      <div className="split-body courses-grid">
        {courses.map((c, i) => {
          const [a, b] = pick(pal.courseArt, i);
          const Tag = c.href ? "a" : "div";
          return (
            <Tag key={c.name} className="course reveal" style={{ background: pick(pal.courseBg, i) }} {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}>
              <div className="course-art">
                {c.banner ? <img src={c.banner} alt={`${c.name} course banner`} loading="lazy" /> : <CourseArt kind={c.art} a={a} b={b} />}
              </div>
              <div className="course-body">
                <div className="course-top"><span className="pill">Completed</span>{c.year && <span className="mono">{c.year}</span>}</div>
                <h3>{c.name}</h3>
                <p>{c.note}</p>
                <div className="course-foot"><span>{c.provider}</span>{c.href && <span className="course-link">Certificate <ArrowUpRight /></span>}</div>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}

/* The eight releases pin one after another as you scroll — pure CSS sticky. */
export function Releases() {
  const pal = palette();
  return (
    <section id="work" className="section wrap split">
      <div className="split-head sticky">
        <Label n="07">Projects at bPlugins</Label>
        <h2 className="h2">Eight releases.<br /><span style={{ color: "#6a6a75" }}>All still live.</span></h2>
        <p className="lead">50,000+ active installs between them. Owned by bPlugins; built, shipped and supported by me.</p>
      </div>
      <div className="split-body stack">
        {releases.map((p, i) => (
          <div className="stack-item" key={p.name} style={{ "--i": i }}>
            <article className="release" style={{ background: pick(pal.releaseBg, i) }}>
              <div className="release-copy">
                <div className="release-top"><b>{String(i + 1).padStart(2, "0")}</b><span>{p.installs}</span></div>
                <h3>{p.name}</h3>
                <p>{p.pitch} {p.contribution}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="release-foot">
                  <span>★ {p.rating ? `${p.rating.toFixed(1)} on WordPress.org` : "Live on WordPress.org"}</span>
                  <a href={p.href} target="_blank" rel="noreferrer">WordPress.org <ArrowUpRight /></a>
                </div>
              </div>
              <div className="release-art">
                <Motif kind={p.motif} ink={pick(pal.releaseInk, i)} panel={pick(pal.releasePanel, i)} accent={pal.releaseAccent} />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Paragraphs joined by a blank line: the CSS line clamp counts those lines, so a
   long quote trails off with an ellipsis instead of cutting through one. */
const quoteText = (q) => "“" + (Array.isArray(q) ? q : [q]).join("\n\n") + "”";

/* A looping deck: Next sends the front card away and the rest move up. */
export function Recommendations() {
  const pal = palette();
  const n = recommendations.length;
  const [cur, setCur] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(0);
  const [step, setStep] = useState(22);
  /* measured after mount so the first render matches the prerendered markup */
  useEffect(() => { setStep(window.matchMedia("(max-width: 900px)").matches ? 16 : 22); }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  const next = () => {
    if (leaving) return;
    setLeaving(true);
    timer.current = setTimeout(() => { setCur((c) => (c + 1) % n); setLeaving(false); }, 380);
  };
  if (!n) return null;
  return (
    <section id="reviews" className="section wrap" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Label n="08">Recommendations</Label>
        <h2 className="h2">Reviewed by the people I ship with.</h2>
      </div>
      <div className="deck">
        {recommendations.map((r, i) => {
          const p = (i - cur + n) % n;
          const out = p === 0 && leaving;
          const transform = out ? "translate(-6%, -40px) rotate(-5deg)" : `translateY(${p * step}px) scale(${1 - p * 0.045})`;
          return (
            <figure key={i} className="rec" aria-hidden={p !== 0}
              style={{ background: pick(pal.recBg, i), transform, zIndex: out ? n + 1 : n - p, opacity: out ? 0 : p === n - 1 ? 0.7 : 1, pointerEvents: p === 0 && !leaving ? "auto" : "none" }}>
              <div className="rec-top"><span>{r.relation}{r.date && <><br />{r.date}</>}</span><span className="rec-count">{i + 1}<i>/{n}</i></span></div>
              {/* one paragraph with real blank lines: the line clamp counts them,
                  so a long quote trails off cleanly instead of cutting mid-line */}
              <blockquote><p>{quoteText(r.quote)}</p></blockquote>
              <div className="rec-foot">
                <figcaption><b>{r.name}</b><span>{r.role}</span></figcaption>
                <button className="rec-next" type="button" onClick={next} tabIndex={p === 0 ? 0 : -1} aria-label="Show the next recommendation">Next <ArrowRight /></button>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <Label n="09">Contact</Label>
      <h2>{contact.title}</h2>
      <div className="contact-row">
        <div className="contact-lines">
          <a className="contact-mail" href={`mailto:${person.email}`}>{person.email} <ArrowUpRight /></a>
          <a className="contact-phone" href={`tel:${person.phoneHref}`}>{person.phone} <ArrowUpRight /></a>
        </div>
        <div className="contact-links">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [...nav, { label: "Courses", href: "#courses" }, { label: "Reviews", href: "#reviews" }, { label: "Contact", href: "#contact" }];
  return (
    <footer className="footer">
      <div className="foot-box">
        <div className="foot-brand">
          <b>Tanin<span className="dot-lime">.</span></b>
          <p>Product engineer in Dhaka. Hand me a spec — you get a shipped product, and someone who stays to support it.</p>
          <div className="foot-me"><img src={person.avatar} width="40" height="40" alt="" loading="lazy" decoding="async" /><span><strong>Thanks for scrolling this far.</strong><em><i className="dot" />Open to roles</em></span></div>
        </div>
        <div className="foot-nav"><span className="foot-h">navigate</span><div className="foot-links">{links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</div></div>
        <div className="foot-el"><span className="foot-h">elsewhere</span><div className="foot-links">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} <ArrowUpRight /></a>)}</div></div>
        <div className="foot-mailbox"><span className="foot-h">say hello</span><a className="foot-mail" href={`mailto:${person.email}`}>{person.email}</a><a className="foot-mail" href={`tel:${person.phoneHref}`}>{person.phone}</a><span className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>{person.city}<br />UTC+6 · replies within a day</span></div>
      </div>
      <div className="foot-bar">
        <span>© {new Date().getFullYear()} Tanin Rahman · Designed &amp; built in Dhaka</span>
        <span>React · Vite</span>
        <a href="#top">Back to top <ArrowUp /></a>
      </div>
    </footer>
  );
}
