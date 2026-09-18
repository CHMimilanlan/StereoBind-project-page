/*
 * Edit this file to fill the page. Put media files in dist/media/ and use
 * relative paths such as "./media/featured-demo.mp4" below.
 * Empty strings intentionally keep the labeled placeholders visible.
 */
const project = {
  paperTitle: "",
  abstract: "",
  bibtex: "",
  paperUrl: "",
  codeUrl: "",
};

const media = {
  "hero-video":     { src: "", poster: "", alt: "Featured stereo audio-visual generation demo" },
  "teaser-figure":  { src: "", alt: "Task teaser showing spatial correspondence over time" },
  "demo-single":    { src: "", poster: "", alt: "Single moving sound source demo" },
  "demo-multiple":  { src: "", poster: "", alt: "Multiple sound sources demo" },
  "demo-complex":   { src: "", poster: "", alt: "Complex dynamic scene demo" },
  "baseline-video": { src: "", poster: "", alt: "Baseline audio-visual comparison" },
  "ours-video":     { src: "", poster: "", alt: "Proposed method audio-visual comparison" },
  "method-figure":  { src: "", alt: "Method architecture and generation pipeline" },
  "results-figure": { src: "", alt: "Main quantitative results and evaluation" },
};

if (project.paperTitle.trim()) {
  document.getElementById("paper-title").textContent = project.paperTitle;
  document.title = `${project.paperTitle} — Project Page`;
}
if (project.abstract.trim()) {
  const abstract = document.getElementById("abstract-text");
  abstract.textContent = project.abstract;
  abstract.classList.remove("empty-copy");
}
if (project.bibtex.trim()) {
  document.getElementById("bibtex-text").textContent = project.bibtex;
}

function activateLink(id, url, label, className) {
  if (!url.trim()) return;
  const old = document.getElementById(id);
  const link = document.createElement("a");
  link.id = id;
  link.className = className;
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  old.replaceWith(link);
}
activateLink("paper-link", project.paperUrl, "Paper ↗", "resource-link");
activateLink("hero-paper-link", project.paperUrl, "Read the paper ↗", "button button-muted");
activateLink("code-link", project.codeUrl, "Code ↗", "resource-link");

for (const slot of document.querySelectorAll("[data-slot]")) {
  const item = media[slot.dataset.slot];
  if (!item?.src?.trim()) continue;
  const isVideo = slot.dataset.type === "video";
  const element = document.createElement(isVideo ? "video" : "img");
  element.src = item.src;
  element.setAttribute("aria-label", item.alt);
  if (isVideo) {
    element.controls = true;
    element.playsInline = true;
    element.preload = "none";
    if (item.poster) element.poster = item.poster;
  } else {
    element.alt = item.alt;
    element.loading = "lazy";
    element.decoding = "async";
  }
  slot.replaceChildren(element);
  slot.classList.add("is-filled");
  slot.removeAttribute("role");
  slot.removeAttribute("aria-label");
}
