/* ------------------------------------------------------------------
 * Everything the site says lives in this file. Edit words here, not in
 * the components.
 * ------------------------------------------------------------------ */

/* "colorful" = pastel blocks · "minimal" = soft neutrals. Same layout. */
export const THEME = "colorful";

export const person = {
  name: "Tanin Rahman",
  first: "TANIN",
  last: "RAHMAN",
  role: "Product engineer",
  city: "Dhaka, Bangladesh",
  /* the live address, e.g. "https://builtbytanin.com" — no trailing slash.
   * `npm run build` uses it to write /.well-known/ard.json for AI agents. */
  site: "",
  email: "builtbytanin@gmail.com",
  phone: "+88 01784933595",
  phoneHref: "+8801784933595",
  tagline: "Hand me a spec. Get a shipped product.",
  heroIntro:
    "I’m the core developer on eight production WordPress products at bPlugins, running on 50,000+ active sites. Hand me a spec and I’ll take it all the way — block architecture, PHP backend, admin UI, releases, and the support thread that follows.",
  /* WebP variants generated from the originals in this folder; `srcset` lets the
   * browser pick the smallest one that still covers the slot. */
  heroPhoto: "/photos/hero-800.webp",
  heroSrcset: "/photos/hero-480.webp 480w, /photos/hero-640.webp 640w, /photos/hero-800.webp 800w, /photos/hero-1089.webp 1089w",
  heroSize: { w: 1089, h: 1444 },
  portrait: "/photos/portrait-620.webp",
  portraitSrcset: "/photos/portrait-420.webp 420w, /photos/portrait-620.webp 620w, /photos/portrait-840.webp 840w, /photos/portrait-1085.webp 1085w",
  portraitSize: { w: 1085, h: 1449 },
  avatar: "/photos/portrait-120.webp",
  pluginIcon: "/my-site-hand-icon.png",
  /* drop the PDF in public/ under this name */
  resume: "/tanin-rahman-resume.pdf",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#toolkit" },
  { label: "Experience", href: "#experience" },
  { label: "What I do", href: "#skills" }
];

export const socials = [
  { label: "GitHub", href: "https://github.com/taninrahman21" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/taninrahman21/" },
  { label: "WordPress", href: "https://profiles.wordpress.org/taninrahman/" },
  { label: "builtbytanin", href: "https://profiles.wordpress.org/builtbytanin/" },
];

export const statement =
  "Eight products, 50,000+ sites, and one developer answering for all of it — from the block editor to the forum reply.";

export const about = {
  title: "I don’t wait to be the right person for the job.",
  paragraphs: [
    "I picked up React because a spec needed a Gutenberg block, PHP because a bug report needed it, and the Model Context Protocol because nobody had built the thing I wanted yet. That’s the shape of every skill on my CV — a spec needed it, so I learned it.",
    "At bPlugins I own the whole lifecycle: block architecture, PHP backend, admin UI, security patches, docs, releases, and the forum thread that follows. A rating goes up or down. An install count moves. That’s the part I like.",
  ],
  principles: [
    { title: "Learn it, then ship it", body: "React, PHP 8, the Block API, MCP — each started as a spec for something I hadn’t done yet." },
    { title: "Own the whole surface", body: "Finished means a stranger can use it without asking." },
    { title: "Answer for my own code", body: "I handle WordPress.org support for everything I build." },
    { title: "Bring other people up", body: "I mentor junior developers on Gutenberg work." },
  ],
};

export const capabilities = {
  title: "I take a product from spec to shipped — and keep it running.",
  stats: [
    { value: "8+", label: "Production projects shipped" },
    { value: "2.6+", label: "Years of professional experience" },
  ],
  items: [
    { title: "Build WordPress plugins end to end", body: "Gutenberg blocks in React, PHP 8 backends, REST endpoints — the whole plugin, not a slice of it." },
    { title: "Design admin UIs people understand", body: "Dashboards and settings screens in React and SCSS that a stranger can use without asking." },
    { title: "Put AI agents to work on real sites", body: "MCP servers and the Abilities API, so a model can read, diagnose and act on WordPress.", proof: { label: "Proof: My Site Hand, my own plugin", href: "https://wordpress.org/plugins/my-site-hand/" } },
    { title: "Ship releases, and keep them safe", body: "Versioning, release tags, security patches and the docs that go with them." },
    { title: "Own the support that follows", body: "I answer the WordPress.org forum threads for what I build — the shortest path to a fix." },
    { title: "Lead and mentor", body: "I bring junior developers up on Gutenberg work and hold the line when a release needs it." },
  ],
  note: "At bPlugins, the products I build and maintain run on 50,000+ active sites.",
};

export const experience = [
  {
    period: "March 2024 — Present",
    type: "Full-time · Dhaka, Bangladesh",
    company: "bPlugins",
    role: "Core Plugin Developer",
    summary:
      "Core developer on eight production WordPress products, with a combined 50,000+ active installs on WordPress.org. Responsible for the full product lifecycle — from Gutenberg block architecture to PHP backend, admin UI, user support and production releases.",
    points: [
      "Took specs from planning to release across eight production projects, shipping Gutenberg blocks with the Block API and React",
      "Designed and built admin dashboards and settings UIs with React and SCSS",
      "Wrote PHP backend logic for plugin features, REST API endpoints and data handling",
      "Identified and patched plugin security vulnerabilities across multiple releases",
      "Managed user support on WordPress.org forums — bugs, feature requests and compatibility",
      "Wrote and maintained plugin documentation and readme files",
      "Collaborated on product decisions and contributed to feature planning",
      "Mentored junior developers on Gutenberg blocks, occasionally leading development efforts",
    ],
    tags: ["Gutenberg", "React", "PHP 8", "REST API", "SCSS", "MySQL", "MCP", "Release management"],
  },
];
export const skills = [
  { group: "Product surface", items: ["Gutenberg Blocks", "WordPress Block API", "React", "SCSS", "JavaScript ES2023"] },
  { group: "Under the hood", items: ["PHP 8", "WordPress Core APIs", "REST API", "MySQL", "Security patching"] },
  { group: "The AI layer", items: ["Model Context Protocol", "Abilities API", "Agent tooling", "Prompt & tool design"] },
  { group: "The unlisted half", items: ["Forum support", "Release management", "Docs & readmes", "Mentoring", "Feature planning"] },
];

/* How I use AI. `who` on each step picks its chip: "me" | "ai" | "both".
 * A toolkit group with no items is left out, so fill in `video` when you can. */
export const ai = {
  title: "AI writes a lot of my first drafts. I own every line that ships.",
  lead: "I use AI every day, the way I use a debugger: on purpose, and with checks. Here is exactly where it sits in my work, and where it doesn’t.",
  flowLabel: "how a feature goes from idea to shipped",
  who: { me: "me", ai: "AI, I steer", both: "me + AI" },
  steps: [
    { title: "Analyse the feature", body: "AI digs through user requests, competitors and edge cases.", who: "both" },
    { title: "Decide if it’s buildable", body: "Scope, effort, risk. I say yes, no, or not yet.", who: "me" },
    { title: "Write the spec", body: "What it does, what it must never do, how we know it works.", who: "me" },
    { title: "Plan and first draft", body: "AI drafts the plan and the first pass of code from my spec.", who: "ai" },
    { title: "Review every diff", body: "I read it all. Nothing merges because it looks right.", who: "me" },
    { title: "Test on real sites", body: "AI lists the edge cases. I run them on real WordPress installs.", who: "both" },
    { title: "Ship and support", body: "Releases, changelogs and the forum replies are mine.", who: "me" },
  ],
  columns: [
    {
      title: "Where it earns its place",
      items: [
        "Feature analysis: user requests, competitors, what it would take",
        "First drafts of blocks, admin screens and PHP handlers from a written spec",
        "Edge-case and test lists before I test by hand",
        "A second pair of eyes on security: escaping, nonces, capability checks",
        "Readmes, docs and translations, which I then edit",
        "Exploring options fast: this portfolio went through dozens of AI-made layouts",
      ],
    },
    {
      title: "What stays mine",
      items: [
        "Deciding if a feature is buildable, and worth building",
        "Architecture and data design",
        "Reading every line before it ships",
        "Testing on real sites, across PHP and WordPress versions",
        "Talking to the people who use the product",
      ],
    },
    {
      title: "Where I don’t trust it",
      items: [
        "Security-critical code it can’t explain line by line",
        "Anything it can’t run or verify",
        "Facts, numbers and API details without a source",
        "Final decisions on what users see",
      ],
    },
  ],
  proof: {
    plugin: { kicker: "I build for AI, not just with it", title: "My Site Hand", body: "An MCP server that lets AI agents read, diagnose and act on a real WordPress site, with permission checks on every action.", href: "https://wordpress.org/plugins/my-site-hand/" },
    site: { kicker: "this site", title: "Designed with Claude, decided by me", body: "AI proposed dozens of layouts, navbars and heroes. I rejected most of them, picked a few, and directed every change you see here." },
    /* swap in the full playlist URL */
    video: {
      kicker: "beyond code", title: "I explain my work on video",
      body: "Short videos made with AI tools, walking through what I build and why. Scripted and checked by me.",
      links: [
        { label: "Tutorial playlist made for bPlugins", href: "https://www.youtube.com/playlist?list=PLPcKO-fKtAYY" },
        { label: "My channel", href: "https://www.youtube.com/@builtbytanin" },
      ],
    },
  },
  toolkit: {
    title: "My AI toolkit",
    note: "what I actually open every day",
    groups: [
      { group: "build", items: ["Claude Code", "Antigravity", "GitHub Copilot"] },
      { group: "think & write", items: ["Claude", "ChatGPT", "Gemini"] },
      { group: "video", items: [] },
    ],
  },
};

/* Courses — add the year, the provider and a certificate link when you have them.
 * `banner` is optional: drop an image in public/photos/ and put its path here;
 * without one, the card shows a drawn tile instead. art: "circuit" | "grid" */
export const courses = [
  {
    name: "Reactive Accelerator — React-Next JS Course",
    provider: "Learn with Sumit · LWS",
    year: "",
    href: "",
    banner: "",
    art: "circuit",
    note: "Responsive Web Design, HTML5 and 15 more skills.",
  },
  {
    name: "Complete Web Development Course",
    provider: "Programming Hero",
    year: "Issued Jun 2022",
    href: "",
    banner: "",
    art: "grid",
    note: "Responsive Web Design, HTML5 and 14 more skills.",
  },
];

/* The one product that is mine end to end — sits right under the hero.
 * `accents` are the phrases inside `blurb` that get the highlight colour. */
export const spotlight = {
  name: "My Site Hand",
  tagline: "AI Assistant, Site Health & MCP Server for WordPress.",
  blurb:
    "46 WordPress capabilities exposed over the Model Context Protocol and the Abilities API, so a model can read, diagnose and act on a real site instead of guessing about one.",
  accents: ["Model Context Protocol", "Abilities API"],
  count: "46",
  countLabel: ["capabilities,", "agent-operable"],
  tags: ["MCP", "Abilities API", "PHP", "AI agents"],
  /* swap for the plugin repo once it is public */
  source: "https://github.com/taninrahman21",
  directory: "https://wordpress.org/plugins/my-site-hand/",
  features: [
    { title: "MCP Server", body: "A full Model Context Protocol server inside the plugin — tools, resources and auth, spoken natively by any MCP client." },
    { title: "Site Health", body: "Diagnostics an agent can read: plugin conflicts, stale updates, PHP notices, all returned as structured results." },
    { title: "AI Assistant", body: "A chat surface in wp-admin wired to the same capability layer, so the assistant acts on the site rather than describing it." },
    { title: "Abilities API", body: "Every action registered through WordPress’s own Abilities API — discoverable, permission-checked, and future-proof." },
  ],
};

/* Products at bPlugins: the four I lead today get a card each (they stack as
 * you scroll); the four I handed off sit in the box underneath.
 * motif: doc | code | timeline | bars | wave · `badge` is optional */
export const products = {
  title: "Eight built.",
  titleMuted: "Four I lead today.",
  lead: "The four I lead now are on the right. The other four I built or grew, then handed to developers I mentored. All owned by bPlugins.",
  stat: "8 built · 4 led today · 50,000+ sites",
  handedOff: {
    title: "Built or grew, now maintained by developers I mentored",
    count: "4 handed off",
    note: "Handed off with docs and pairing, so they keep shipping without me.",
    items: [
      { name: "Advance Custom HTML", href: "https://wordpress.org/plugins/advance-custom-html/" },
      { name: "Timeline Block", href: "https://wordpress.org/plugins/timeline-block/" },
      { name: "Timeline", href: "https://wordpress.org/plugins/b-timeline/" },
      { name: "StreamCast", href: "https://wordpress.org/plugins/streamcast/" },
    ],
  },
};

export const releases = [
  { name: "PDF Poster", badge: "bPlugins’ fastest-growing product", installs: "20,000+ installs", rating: 4.5, motif: "doc", pitch: "Let visitors read PDFs without leaving the page.", points: ["5 viewer modes, including Flipbook, Scroll and Slider", "Privacy-first analytics and logo or text watermarking", "Fixed mobile, CJK and CDN loading; secured REST and AJAX"], href: "https://wordpress.org/plugins/pdf-poster/" },
  { name: "Document Embedder", installs: "9,000+ installs", rating: 4.9, motif: "doc", pitch: "Let visitors read files without downloading.", points: ["Read-only AI agent access through the Abilities API and MCP", "3D flipbook, email gate with a leads dashboard, Box integration", "Fixed a stored XSS issue and hardened downloads"], href: "https://wordpress.org/plugins/document-emberdder/" },
  { name: "Document Viewer", installs: "2,000+ installs", rating: 4.7, motif: "code", pitch: "View files right in the browser.", points: ["Rebuilt block settings in plain language", "Shortcodes now render through the block engine", "Closed content-protection bypasses"], href: "https://wordpress.org/plugins/embed-office-viewer/" },
  { name: "Voice Feedback", installs: "New", rating: 5.0, motif: "wave", pitch: "Let visitors speak their minds in seconds.", points: ["Built from scratch: drawer, block, shortcode and audio library", "Email alerts with recordings, moved to the REST API", "Email gate and Cloudflare Turnstile spam protection"], href: "https://wordpress.org/plugins/voice-feedback/" },
];

/* Recommendations, written on LinkedIn. Quotes are verbatim — `quote` is a list
 * of paragraphs so the longer ones keep their shape. */
export const recommendations = [
  {
    quote: [
      "I highly recommend Tanin as a Full-Stack WordPress Developer. Working with him at bPlugins has been a great experience. Tanin is an extremely dedicated developer who excels at analyzing user needs, competitor products, and complex technical requirements before writing a single line of code. He takes full ownership of his work, managing everything from initial feature research.",
      "His strong analytical mindset allows him to solve tough technical problems independently and ship high-quality products without needing step-by-step guidance. He would be a fantastic asset to any engineering team!",
    ],
    name: "Farazi Forhaduzzaman",
    role: "Senior QA Engineer · Manual & Automation Testing · Test Strategy · Quality Leadership",
    relation: "Worked with Tanin on the same team",
    date: "July 27, 2026",
  },
  {
    quote: [
      "I've had the pleasure of working with Tanin at bPlugins, and it's been great to see his growth as a developer. We collaborate on several projects, and I've always found him to be reliable, eager to learn, and willing to put in the effort to solve challenging problems.",
      "What I like most about working with Tanin is how quickly he picks up new technologies and concepts. Whenever he comes across something unfamiliar, he takes the initiative to research it, explore different approaches, and come up with a solid solution.",
      "Beyond his technical skills, Tanin is easy to work with. He's open to feedback, communicates well with the team, and takes ownership of the work he's responsible for.",
      "Over the time we've worked together, I've seen him become more confident and capable, and it's been rewarding to work alongside him on different projects.",
      "I do not doubt that Tanin will continue to grow in his career. Any team looking for a dedicated and hardworking developer would be lucky to have him. I highly recommend him and wish him all the best in his future opportunities.",
    ],
    name: "K M Soriful Islam",
    role: "WordPress & SaaS Content Marketer · Helped grow HappyAddons from 5k → 16k+ visitors",
    relation: "Worked with Tanin on the same team",
    date: "July 7, 2026",
  },
];

export const contact = {
  title: "Got a product that needs someone who stays?",
};
