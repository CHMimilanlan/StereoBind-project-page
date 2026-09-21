# StereoBind project page: content guide

The paper title and abstract are already filled. The page keeps media empty until you provide the actual material. Put media files in `dist/media/` and set paths in `dist/content.js`, for example `"./media/static-01.mp4"`. An empty `src` leaves a labeled placeholder visible.

## Brand logo

- Asset: `dist/media/stereobind-logo.png`
- Placement: the full mark is the hero visual; compact versions appear in the header and footer.
- Keep the transparent padding and the complete left/right wave shapes when replacing or exporting the logo.

## Paper and code links

Set `paperUrl` and `codeUrl` in the `project` object near the top of `dist/content.js`. Until real URLs are supplied, the two top-of-page buttons remain disabled. Use anonymous destinations if the page is shared during double-blind review.

## Fixed media slots

| Slot in `dist/content.js` | Page location | Put here |
| --- | --- | --- |
| `hero-video` | Large featured player after the Abstract | Strongest example of dynamic spatial correspondence: a visible source moves and the stereo sound follows it |
| `teaser-figure` | “See the motion. Hear it move.” | Installed teaser image showing visual motion and the corresponding acoustic trajectory (`dist/media/teaser.jpg`) |
| `dataset-figure` | “Teaching sound where to move” | Installed StereoWorld-29K construction pipeline (`dist/media/stereoworld-29k-pipeline.jpg`) |
| `baseline-video` | Left side of “A difference you can hear” | Baseline output for the exact same input as the right-hand clip |
| `ours-video` | Right side of that comparison | StereoBind output, aligned to the baseline in length, framing, and loudness |
| `method-figure` | “From correspondence to generation” | Installed StereoBind method figure showing VMB Tokens, STE, and RT-RoPE (`dist/media/stereobind-method.jpg`) |

For the video slots, 16:9 MP4 with H.264 video and AAC **stereo** audio is a practical web export. A 1080p source and a still poster image are useful. Preserve the left and right channels—do not downmix to mono. For figures, prefer SVG or a high-resolution PNG/WebP with labels that remain readable on mobile.

## Expandable results gallery

The Results section is divided into four categories: **Static**, **Dynamic**, **Human Speech**, and **Object-Centric**. `resultVideos` in `dist/content.js` contains two empty sample objects per category. Replace each object's `title`, `note`, `src`, and optional `poster`; add more objects to the corresponding array for more videos. The layout automatically grows to accommodate them. Do not add a multi-source demonstration unless the paper scope changes.

Choose category examples that actually support the paper's claims. For Dynamic clips, a clearly visible trajectory is most useful. For Human Speech and Object-Centric clips, describe what reviewers should watch and listen for in each `note`. Avoid implying that a clip tests a capability not evaluated in the manuscript.

## Before sharing with reviewers

Check all clips with two-ear headphones, verify stereo-channel integrity, and level-match baseline comparisons. Confirm that poster images, filenames, links, and page metadata do not reveal authors or institutions. This template includes no analytics, third-party embeds, or remote fonts; still verify that the selected host does not track reviewers if you plan to include this URL in an ICLR 2027 submission.
