/*
 * Edit this file to fill the page. Put media files in dist/media/ and use
 * relative paths such as "./media/featured-demo.mp4" below.
 * Empty strings intentionally keep the labeled placeholders visible.
 */
const project = {
  paperTitle: "Hear the World in Stereo: Learning Dynamic Spatial Correspondence for Immersive Joint Video-Audio Generation",
  abstract: "Joint video-audio (VA) generation has made rapid progress in semantic correspondence and temporal synchronization, yet spatial correspondence remains largely overlooked. In particular, stereo audio does not ensure that the perceived sound location dynamically follows the motion of its visible source over time. We define this property as Dynamic Spatial Correspondence and propose StereoBind, a motion-conditioned framework that explicitly binds visual source motion to stereo sound generation. StereoBind utilizes motion tracks as a shared cross-modal condition and jointly models entity-level audiovisual correspondence, absolute spatial states, and relative spatial relations. Specifically, Visual Motion Binding (VMB) Tokens establish entity-level audiovisual correspondence, while a Spatial Track Encoder (STE) encodes the absolute trajectory of the sound source, and Residual Track RoPE (RT-RoPE) captures the relative spatial relations induced by its trajectory. To provide supervision for such correspondence, we further construct StereoWorld-29K, a large-scale stereo audio-video dataset with corresponding motion tracks, and introduce StereoWorldBench (SW-Bench) to evaluate the spatial consistency of generated stereo audio. Experiments on SW-Bench demonstrate that StereoBind achieves motion-aligned stereo generation, enabling stereoscopic audio generation beyond the capabilities of existing joint VA models and advancing immersive generation.",
  bibtex: "",
  paperUrl: "",
  codeUrl: "",
};

const media = {
  "hero-video":     { src: "", poster: "", alt: "Featured stereo audio-visual generation demo" },
  "teaser-figure":  { src: "./media/teaser.jpg", alt: "StereoBind teaser showing visual motion, dynamic stereo audio, and the resulting immersive experience" },
  "dataset-figure": { src: "./media/stereoworld-29k-pipeline.jpg", alt: "StereoWorld-29K construction pipeline with data curation, AVS processing, and spatial data synthesis" },
  "baseline-video": { src: "", poster: "", alt: "Baseline audio-visual comparison" },
  "ours-video":     { src: "", poster: "", alt: "Proposed method audio-visual comparison" },
  "method-figure":  { src: "./media/stereobind-method.jpg", alt: "StereoBind architecture with Visual Motion Binding Tokens, Spatial Track Encoder, and Residual Track RoPE" },
};

/* Add as many objects as needed to each category. An empty src draws a slot. */
const resultVideos = {
  static: [
    { title: "Static sample 01", src: "", poster: "", note: "Add a static-scene stereo result." },
    { title: "Static sample 02", src: "", poster: "", note: "Add another static-scene result." },
  ],
  dynamic: [
    { title: "Dynamic sample 01", src: "", poster: "", note: "Add a result with a clear source trajectory." },
    { title: "Dynamic sample 02", src: "", poster: "", note: "Add another moving-scene result." },
  ],
  speech: [
    { title: "Human speech 01", src: "", poster: "", note: "Add a video with a visible speaking source." },
    { title: "Human speech 02", src: "", poster: "", note: "Add another speech result." },
  ],
  object: [
    { title: "Object-centric 01", src: "", poster: "", note: "Add a result centered on one sounding object." },
    { title: "Object-centric 02", src: "", poster: "", note: "Add another object-centric result." },
  ],
};

if (project.paperTitle.trim()) {
  const title = document.getElementById("hero-title");
  const colon = project.paperTitle.indexOf(":");
  if (colon > -1) {
    const emphasis = document.createElement("em");
    emphasis.textContent = project.paperTitle.slice(colon + 1).trim();
    title.replaceChildren(document.createTextNode(project.paperTitle.slice(0, colon + 1) + " "), emphasis);
  } else {
    title.textContent = project.paperTitle;
  }
  document.title = project.paperTitle;
}
if (project.abstract.trim()) {
  document.getElementById("abstract-text").textContent = project.abstract;
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
activateLink("paper-link", project.paperUrl, "Paper ↗", "button button-primary");
activateLink("code-link", project.codeUrl, "Code ↗", "button button-muted");

for (const grid of document.querySelectorAll("[data-results]")) {
  const category = grid.dataset.results;
  for (const [index, item] of (resultVideos[category] || []).entries()) {
    const slotId = `${category}-${index + 1}`;
    media[slotId] = { src: item.src, poster: item.poster, alt: item.title };

    const card = document.createElement("article");
    card.className = "result-card";
    const frame = document.createElement("div");
    frame.className = "media-placeholder media-result";
    frame.dataset.slot = slotId;
    frame.dataset.type = "video";
    frame.setAttribute("role", "img");
    frame.setAttribute("aria-label", `Reserved video for ${item.title}`);

    const corner = document.createElement("div");
    corner.className = "placeholder-corner";
    corner.textContent = `${category.toUpperCase()} / ${String(index + 1).padStart(2, "0")}`;
    const center = document.createElement("div");
    center.className = "placeholder-center";
    const play = document.createElement("span");
    play.className = "placeholder-play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";
    const name = document.createElement("strong");
    name.textContent = item.title;
    const instruction = document.createElement("small");
    instruction.textContent = "Add stereo result video · 16:9";
    center.append(play, name, instruction);
    frame.append(corner, center);

    const caption = document.createElement("div");
    caption.className = "result-card-copy";
    const heading = document.createElement("h4");
    heading.textContent = item.title;
    const note = document.createElement("p");
    note.textContent = item.note;
    caption.append(heading, note);
    card.append(frame, caption);
    grid.append(card);
  }
}

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
