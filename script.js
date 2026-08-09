const publications = [
  ["01","Efficacy and Safety of Fruquintinib in Refractory Metastatic Colorectal Cancer: A Systematic Review and Meta Analysis","Journal of Gastrointestinal Oncology"],
  ["02","Comparing the Safety and Efficacy of Resmetirom and Semaglutide in Patients with Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)","Pharmacoepidemiology · MDPI"],
  ["03","Artificial Intelligence in Biomedical and Modern Healthcare Informatics — Co-authored Chapter 27","Elsevier"],
  ["04","Prevalence of Colorectal Cancer in Solid Organ Transplant","Clinical Transplant"],
  ["05","Perception of Indian Medical Students Towards University Exams and Proposed Licensure cum Post-Graduate Specialty (Residency) entrance examination (National Exit Test)","Medical Science Educator · Springer Nature"],
  ["06","Endoscopic Ultrasound (EUS) vs Magnetic Resonance Cholangiopancreatography (MRCP) in the Etiological Evaluation of Idiopathic Acute Pancreatitis: A Systematic Review and Meta Analysis","Digestive Diseases and Sciences"],
  ["07","SARS-COV-2 and its variants of concern including Omicron","Chemical Biology and Drug Design · Wiley"],
  ["08","Consecutive Hits of COVID-19 in India — the mystery of plummeting cases and current scenario","Advances in Biomedical and Health Sciences"],
  ["09","Thromboembolism and Anticoagulation Therapy Among the Patients with COVID-19","Annals of Clinical Cardiology"],
  ["10","Diagnostic and prognostic value of plasma D-dimer levels for metastasis and survival in gastric cancer: A systematic review and meta-analysis","Journal of Clinical Oncology · 2026 ASCO Annual Meeting"],
  ["11","Concept Proposal for Nationalised Formative and Summative Assessments to Enhance the Preparedness of Medical Students for the National Exit Test (NExT) and Solution for Low …","Global Journal of Medical Students"],
  ["12","The role of lifestyle in prevention and treatment of gastroesophageal reflux disease","Archives of Razi Institute"],
  ["13","A rare Case of complete Cryptophthalmus and suspected Frasers syndrome in a Female Neonate","Clinical Medicine Insights: Case Reports · SAGE"],
  ["14","A fungus among us: The strange tale of Chondrostereum Purpureum — A plant pathogen that found a new home in humans: A correspondence","New Microbes and New Infections"],
  ["15","Comparison of Carbetocin and Oxytocin Efficacy in Preventing Postpartum Hemorrhage after C-Section","Journal of Obstetrics Anesthesia and Critical Care"],
  ["16","Medical students and their interests beyond medicine","National Medical Journal of India"],
  ["17","From petechiae to Intracerebral Haemorrhage: A rare progression of pediatric Idiopathic thrombocytopenia","Cureus"],
  ["18","Medical tourism — Patients without Borders","Global Journal of Medical Students"],
  ["19","Unravelling genetic landscape of sickle cell disease in India","Medicine — India"],
  ["20","Beyond Monotherapy: The Emerging Promise of Finerenone–Empagliflozin Combination in Diabetic Chronic Kidney Disease","International Journal of Contemporary Medicine · Published 2026"]
];

const publicationLinks = {
  "01": "https://doi.org/10.21037/jgo-2025-385",
  "02": "https://doi.org/10.3390/pharma4030014",
  "03": "https://doi.org/10.1016/C2022-0-03101-9",
  "04": "https://doi.org/10.1111/ctr.70470",
  "05": "https://doi.org/10.1007/s40670-024-02198-3",
  "06": "https://doi.org/10.1007/s10620-025-09408-x",
  "07": "https://doi.org/10.1111/cbdd.14035",
  "08": "https://doi.org/10.22092/ari.2021.356147.1791",
  "09": "https://www.ovid.com/jnls/accd/fulltext/10.4103/accj.accj_45_20~thromboembolism-and-anticoagulation-therapy-among-the",
  "10": "https://ascopubs.org/doi/abs/10.1200/jco.2026.44.16_suppl.e16089",
  "11": "https://doi.org/10.52314/gjms.2022.v2i3.93",
  "12": "https://doi.org/10.4103/abhs.abhs_9_23",
  "13": "https://doi.org/10.1177/11795476231189042",
  "14": "https://doi.org/10.1016/j.nmni.2023.101143",
  "15": "https://doi.org/10.4103/joacc.joacc_59_23",
  "16": "https://doi.org/10.25259/NMJI_173_2024",
  "17": "https://doi.org/10.7759/cureus.80818",
  "18": "https://doi.org/10.25259/GJMS_3_2024",
  "19": "https://doi.org/10.25259/MEDINDIA_33_2025",
  "20": "https://ijop.net/index.php/ijocm/article/view/3717"
};

const conferences = [
  ["2026","Global Health Summit — AAPI","Presented a poster and won 3rd place in the poster presentation.","3rd place · Poster Presentation"],
  ["2025","Humans of USMLE","Presented 2 posters.","2 posters"],
  ["2023","APMEDUCON 13","Smt. C. Janaki Medal for Best Paper; 2nd place for Best Poster.","Best Paper · Best Poster"],
  ["2023","Southern Medical Students Annual Research Conference","Best Case Presentation award; presented paper, poster and case.","Best Case Presentation"],
  ["2023","GOMECON — Goa Medical College","1st place in Med Hackathon; 2nd place in AI Simulation Medicine.","1st · 2nd"],
  ["2022","SIMSA — General Body Meet","Represented Andhra Pradesh in the South Indian Medical Students Association's first General Conclave.","Represented Andhra Pradesh"],
  ["2022","Illuminati — AFMC","Research paper presentation and Ideathon; completed Emergency and Trauma Surgery workshops.","Presentation · Ideathon · Workshop"],
  ["2022","FMPC — Family Medicine and Primary Care","Represented GAIMS at the annual conference.","GAIMS representative"],
  ["2022","Insight — AIIMS New Delhi","Research presentation, case presentation and online Ideathon; completed ECG workshop.","Research · Case · Ideathon · ECG"],
  ["2022","SIMSA — General Conclave","Organising committee of the General Conclave of the South Indian Medical Students Association.","Organising committee"],
  ["2022","GOMECON — Goa Medical College","Poster presentation; Top-10 in paper presentation; 3rd place in Med-Hackathon.","Poster · Top-10 · 3rd place"],
  ["2022","Southern Medical Students Annual Research Conference (SMARC)","1st place in Research Paper presentation; consolation prize in Case presentation.","1st place · Case presentation"],
  ["2022","9th World Congress of Neurosurgery — Jaipur","Received a $500 scholarship from the Walter E. Dandy Neurosurgical Society.","$500 scholarship"],
  ["2022","Humans of USMLE — Hyderabad","Presented a case as a poster.","Poster presentation"],
  ["2022","JIPMER Conniassance","Top 10 and presented research.","Top 10 · Research"]
];

const awards = [
  "3rd Place — Poster Presentation, Global Health Summit 2026 by AAPI",
  "Scholarship of $500 from Walter E. Dandy Neurosurgical Society to attend the 9th Neurosurgical World Congress",
  "Smt. C. Janaki Medal for Best Research by the Government of Andhra Pradesh, India",
  "Award of Excellence by AAPI (American Association of Physicians of Indian Origin)",
  "Wordsmith Scholarship worth $350 by MedEngage",
  "Student National Award by AFPI (Academy of Family Physicians of India)",
  "Best Research Paper — Southern Medical Students Annual Conference 2022",
  "Best Case Presentation — Southern Medical Students Annual Research Conference 2023",
  "Best Research Paper — APMEDUCON 13, 2023",
  "1st Place Med Hackathon — GOMECON 2023",
  "2nd Place AI Simulation Medicine — GOMECON 2023",
  "2nd Place Best Research Poster — APMEDUCON 13, 2023",
  "3rd Place Med Hackathon — GOMECON 2022",
  "Student Organiser Award — APTMGUSA",
  "Article “Menstruation in LGBTQIA+ communities” featured in Reincarnation, described in the CV as the first PRIDE magazine by Indian medical students"
];

const experiences = [
  ["GAIMS Axis Magazine","Intern",""],
  ["Student Network Organisation","College representative",""],
  ["Council of Reproductive and Gender Education — South Indian Medical Students Association","Council member",""],
  ["Rubaroo — Non-profit Service Organisation","Community facilitator","Designed curriculum and taught underprivileged children in Hyderabad who could not attend school."],
  ["MSFC (Medical Students for Choice)","Board member",""],
  ["Global Association of Indian Medical Students (GAIMS)","South Zone director",""],
  ["Squad Medicine Research (SMR)","Research Team Lead",""],
  ["Psyk Life — private psychology clinic","Online Psychology Intern",""],
  ["Walter E. Dandy Neurosurgical Club","Southern Coordinator",""],
  ["The Check Up magazine","Guest article",""],
  ["Cyber Vakeel","Designer · Speaker","Invited by the Government of Telangana to design a campaign and educate people in a movement to end cyber sexual harassment, especially against children."],
  ["Auricle","Speaker · Script writer","Paid educational app where medical education was taught through short videos of less than a minute."]
];


/* ============================================================
   IMAGE / MEDIA CONFIGURATION
   ============================================================
   Put your photographs in the paths below. The website will
   automatically show them in the corresponding section.
*/
const aboutImages = [
  "assets/about/about-01.jpg",
  "assets/about/about-02.jpg",
  "assets/about/about-03.jpg"
];

const conferenceImages = {
  "Global Health Summit — AAPI": [
    "assets/conferences/global-health-summit-aapi-01.jpg",
    "assets/conferences/global-health-summit-aapi-02.jpg",
    "assets/conferences/global-health-summit-aapi-03.jpg",
    "assets/conferences/global-health-summit-aapi-04.jpg"
  ]
  // Add other conference galleries here using the exact conference name.
};

const extracurriculars = {
  "Photography": [
    {
      image: "assets/extracurriculars/photography/photo-01.jpg",
      title: "Photography",
      description: ""
    },
    {
      image: "assets/extracurriculars/photography/photo-02.jpg",
      title: "Photography",
      description: ""
    },
    {
      image: "assets/extracurriculars/photography/photo-03.jpg",
      title: "Photography",
      description: ""
    }
  ],
  "Writing": [
    {
      image: "assets/extracurriculars/writing/writing-01.jpg",
      title: "Writing",
      description: ""
    },
    {
      image: "assets/extracurriculars/writing/writing-02.jpg",
      title: "Writing",
      description: ""
    }
  ],
  "Sports": [
    {
      image: "assets/extracurriculars/sports/sports-01.jpg",
      title: "Sports",
      description: ""
    },
    {
      image: "assets/extracurriculars/sports/sports-02.jpg",
      title: "Sports",
      description: ""
    }
  ],
  "Others": [
    {
      image: "assets/extracurriculars/others/other-01.jpg",
      title: "Others",
      description: ""
    },
    {
      image: "assets/extracurriculars/others/other-02.jpg",
      title: "Others",
      description: ""
    }
  ]
};

function imageMarkup(src, alt, className = "") {
  return `
    <img class="${className}" src="${src}" alt="${alt}" loading="lazy"
         onerror="this.closest('.media-item')?.classList.add('missing-image'); this.style.display='none';">
  `;
}

document.getElementById("publication-grid").innerHTML = publications.map(p => {
  const link = publicationLinks[p[0]];
  return `<article class="publication-card">
    <span class="num">${p[0]}</span>
    <h3>${p[1]}</h3>
    <div class="journal">${p[2]}</div>
    ${link ? `<a class="pub-link" href="${link}" target="_blank" rel="noopener">View publication ↗</a>` :
    `<span class="pub-link disabled">Publication link — add URL</span>`}
  </article>`;
}).join("");

document.getElementById("conference-grid").innerHTML = conferences.map((c,i) => `
  <article class="conference-card" data-conf="${i}">
    <div class="year">${c[0]}</div>
    <h3>${c[1]}</h3>
    <p>${c[2]}</p>
    <span class="tag">${c[3]} · View details ↗</span>
  </article>
`).join("");

document.getElementById("award-list").innerHTML = awards.map((a,i) =>
  `<div class="award"><div class="award-num">${String(i+1).padStart(2,"0")}</div><strong>${a}</strong></div>`
).join("");

document.getElementById("experience-list").innerHTML = experiences.map(e =>
  `<article class="timeline-item"><div class="role">${e[1]}</div><div><h3>${e[0]}</h3><p>${e[2] || "Leadership / organizational experience listed in CV."}</p></div></article>`
).join("");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll(".conference-card").forEach(card => {
  card.addEventListener("click", () => {
    const c = conferences[Number(card.dataset.conf)];
    const slug = c[1].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
    const images = conferenceImages[c[1]] || [
      `assets/conferences/${slug}-01.jpg`,
      `assets/conferences/${slug}-02.jpg`,
      `assets/conferences/${slug}-03.jpg`,
      `assets/conferences/${slug}-04.jpg`
    ];

    modalContent.innerHTML = `
      <p class="eyebrow">${c[0]} · CONFERENCE</p>
      <h2>${c[1]}</h2>
      <div class="meta">${c[3]}</div>
      <p>${c[2]}</p>

      <div class="gallery">
        ${images.map((src, index) => `
          <div class="media-item conference-media">
            <img src="${src}" alt="${c[1]} — photograph ${index + 1}" loading="lazy"
                 onerror="this.parentElement.classList.add('missing-image'); this.style.display='none';">
            <div class="gallery-placeholder-fallback">
              <span>Photograph ${index + 1}</span>
              <small>${src}</small>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});

/* ============================================================
   EXTRA CURRICULARS
   ============================================================ */
const extracurricularGrid = document.getElementById("extracurricular-grid");
const extracurricularTabs = document.querySelectorAll(".extracurricular-tab");

function renderExtracurriculars(category) {
  if (!extracurricularGrid) return;

  const items = extracurriculars[category] || [];

  extracurricularGrid.innerHTML = items.map((item, index) => `
    <article class="extracurricular-card">
      <div class="media-item extracurricular-media">
        <img src="${item.image}"
             alt="${item.title} — ${category} ${index + 1}"
             loading="lazy"
             onerror="this.parentElement.classList.add('missing-image'); this.style.display='none';">
        <div class="gallery-placeholder-fallback">
          <span>${category}</span>
          <small>${item.image}</small>
        </div>
      </div>
      <div class="extracurricular-card-content">
        <h3>${item.title}</h3>
        ${item.description ? `<p>${item.description}</p>` : ""}
      </div>
    </article>
  `).join("");
}

extracurricularTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    extracurricularTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderExtracurriculars(tab.dataset.category);
  });
});

renderExtracurriculars("Photography");


document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
function closeModal(){ modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); }
