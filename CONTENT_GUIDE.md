# Project page content guide

The page is an anonymous, English-language research-page template. Its video and image slots are deliberately empty. Place your assets in `dist/media/`, then fill their relative paths and the paper metadata in `dist/content.js`. An empty `src` keeps the designed placeholder visible. No source file or external service is needed to preview the page locally.

| Slot | Page location | Put here | Suggested export |
| --- | --- | --- | --- |
| 01 `hero-video` | First large player, below the title | Strongest example: a visible sounding object moves and its stereo position audibly follows | 16:9 MP4, H.264 video + AAC stereo audio, 1080p, ideally 6–12 s; optional poster image |
| 02 `teaser-figure` | “The paper in one picture” | Task diagram: video world, acoustic world, spatial correspondence and motion trajectory | SVG preferred, or PNG/WebP at least 2400 px wide; wide 16:7 layout |
| 03 `demo-single` | Gallery card 1 | One clear moving source, with a left–right or right–left trajectory | 16:9 or 16:10 MP4 with stereo audio |
| 04 `demo-multiple` | Gallery card 2 | At least two distinguishable sounding sources, if demonstrated in the paper | 16:9 or 16:10 MP4 with stereo audio |
| 05 `demo-complex` | Gallery card 3 | A longer, dynamic, or visually complex scene supported by the experiments | 16:9 or 16:10 MP4 with stereo audio |
| 06 `baseline-video` | Left comparison player | Baseline output for one exact input | MP4, same duration, video framing and playback loudness as slot 07 |
| 07 `ours-video` | Right comparison player | Your model's output for that exact input | MP4, same duration, video framing and playback loudness as slot 06 |
| 08 `method-figure` | “From correspondence to generation” | Actual architecture/pipeline figure, including the alignment and trajectory component | SVG preferred, or high-resolution PNG/WebP, wide 16:7 layout |
| 09 `results-figure` | “What the results actually show” | Main quantitative table or plot; prioritize spatial and temporal evidence | SVG preferred, or high-resolution PNG/WebP, wide 16:7 layout |

Fill `paperTitle`, `abstract`, `bibtex`, `paperUrl`, and `codeUrl` in `dist/content.js` when ready. You may edit the short captions in `dist/index.html` to use your method name and exact experimental claims. Replace optional descriptions of multiple sources, occlusion, or longer scenes if they are outside the paper's evaluated scope.

Before sharing a review link, verify that all video exports retain two separate audio channels. Do not use background music or louder playback to make the stereo effect appear stronger. Make sure comparison videos are level-matched and start at the same event. Check all labels and figures on a phone. This template includes no analytics, third-party embeds, remote fonts, author names, or institution marks. If used as an ICLR 2027 anonymous demonstration link, keep the host and linked paper/code destinations anonymous and ensure the host does not track reviewers.
