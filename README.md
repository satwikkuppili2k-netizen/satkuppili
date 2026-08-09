# Satwik Kuppili Portfolio

Static GitHub Pages portfolio.

## Main files
- `index.html` — website structure/content
- `styles.css` — design
- `script.js` — publications, conferences, awards and interactive galleries
- `cv.pdf` — uploaded CV
- `assets/conferences/` — add conference photographs here
- `assets/awards/` — add award images/certificates here

## Adding publication links
Open `script.js` and add the exact DOI, PubMed or journal URL to `publicationLinks`.

Example:
`"01": "https://doi.org/..."`

## Adding conference photographs
Place images in `assets/conferences/`. The conference cards already open a gallery modal; the placeholders show the intended filenames.

For the cleanest workflow, send the photographs to ChatGPT and specify the conference name. The site can then be updated with the actual images and captions.



## Publication updates
- Added the supplied Ovid link for the COVID-19 thromboembolism paper.
- Added the supplied International Journal of Contemporary Medicine link for the finerenone–empagliflozin paper; the journal page identifies it as published July 20, 2026 and gives DOI 10.37506/11jtfa32.
- Added the 2026 ASCO/JCO meeting abstract: “Diagnostic and prognostic value of plasma D-dimer levels for metastasis and survival in gastric cancer: A systematic review and meta-analysis,” DOI 10.1200/JCO.2026.44.16_suppl.e16089.
- Removed “Sculpting Tomorrow's surgeons: Insights from Indian Undergraduate students in plastic surgery” from the website.
## GitHub Pages deployment
This is a static HTML/CSS/JavaScript site. The root `.nojekyll` file disables Jekyll processing so folders such as `assets/` are served directly.
