import React from "react";
import "../css/EducationSection.css";

const EDUCATION = [
  {
    id: "itdel",
    title: "Institut Teknologi Del",
    date: "Aug 2023 — Sep 2026 (Expected)",
    score: "IPK 3.18 / 4.00",
    location: "Laguboti, Toba, North Sumatra",
    degree: "Diploma III in Information Technology",
    highlights: [
      { icon: "📸", text: "Information Technology Student Association in Del Institute of Technology - Documentation Division Member (Dec 2025 - Present)"},
      { icon: "📸", text: "Information Technology Student Association in Del Institute of Technology - Documentation Division Member (Sep 2024 - Dec 2025)"},
      { icon: "⛑️", text: "Committee for the Cadre Program of the Information Technology Student Association in Del Institute of Technology - Division of First Aid and Emergency Response (Oct 2024)"},
      { icon: "⛑️", text: "Committee for the Cadre Program of the Information Technology Student Association in Del Institute of Technology - Division of First Aid and Emergency Response (Oct 2025)"},
    ],
    logo: "/assets/image/LogoITDel.jpg",
    chips: ["Diploma (D3)", "Active Student"]
  },
  {
    id: "sma",
    title: "SMA Negeri 3 Tarutung",
    date: "Jul 2020 — Apr 2023",
    score: null,
    location: "Tarutung, North Tapanuli, North Sumatra",
    degree: "Science Major",
    highlights: [{ icon: "🔬", text: "Focus: Natural Sciences" }],
    logo: "/assets/image/10.jpg",
    chips: ["High School", "Science Major"]
  }
];

const EducationCard = ({ item, index }) => {
  return (
    <article
      className="education-card reveal"
      tabIndex={0}
      aria-labelledby={`${item.id}-title`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="card-left">
        <div className="timeline-marker" aria-hidden>
          <span className="marker-dot" />
        </div>

        <div className="school-logo" aria-hidden>
          <img src={item.logo} alt={`Logo ${item.title}`} />
        </div>

        <div className="meta">
          <div className="edu-date">{item.date}</div>
          {item.score && <div className="edu-score">{item.score}</div>}
        </div>
      </div>

      <div className="card-right">
        <h3 id={`${item.id}-title`} className="edu-school">{item.title}</h3>
        <p className="edu-location">{item.location}</p>
        <p className="edu-degree">{item.degree}</p>

        <ul className="education-highlights">
          {item.highlights.map((h, i) => (
            <li key={i} className="highlight-item">
              <span className="highlight-badge" aria-hidden>{h.icon}</span>
              <span className="highlight-text">{h.text}</span>
            </li>
          ))}
        </ul>

        <div className="card-footer">
          {item.chips.map((c, idx) => (
            <span key={idx} className={`chip ${idx === 1 ? "outline" : ""}`}>{c}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="education-container">
        <h2 id="education-title" className="section-title">Education</h2>

        <div className="education-grid">
          <div className="timeline-line" aria-hidden />
          {EDUCATION.map((item, i) => (
            <EducationCard item={item} index={i} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
