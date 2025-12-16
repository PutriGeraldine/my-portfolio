import "../css/CertificateSection.css";

const CERTIFICATES = [
  {
    id: "MySkill Short Class",
    title: "UI/UX Design Fundamentals",
    issuer: "MySkill",
    date: "January 2025",
    type: "Short Course",
    description: "A short course focused on understanding core UI/UX principles, user research methods, and interface design fundamentals using industry-standard tools",
    skills: ["UX Research", "UI Design Fundamentals", "User Flow", "Wireframing", "Prototyping", "Figma"],
    logo: "/assets/image/myskill.png",
    file: "public/sertificate/Putri Geraldine Alexsandra Sihombingc E-Sertifikat SC UIUX MySkill Januari 2025.pdf",
    badge: "UI/UX Design"
  },
    {
    id: "MySkill Short Class",
    title: "Wordpress Introduction",
    issuer: "MySkill",
    date: " February 2025",
    type: "Short Course",
    description: "Completed a short class in Software Engineering focused on WordPress introduction, covering essential web development basics and content management using the WordPress platform.",
    skills: ["WordPress Basics", "Website Structure & Pages", "Content Management (Posts, Media, Themes)", "Basic Publishing & Editing", "Introduction to Plugins", "Basic Web Design Concepts"],
    logo: "/assets/image/myskill.png",
    file: "public/sertificate/Putri Geraldine Alexsandra Sihombing E-Sertifikat SC Wordpress Introduction Februari 2025 MySkill.pdf",
    badge: "WordPress Beginner"
  },
  {
    id: "Infinite Learning - Apple Developer Academy",
    title: "Apple Foundation Program",
    issuer: "Infinite Learning",
    date: "June 2025 - July 2025",
    type: "Apple Developer Training",
    description: "Apple Foundation Program is an intensive and collaborative learning experience focused on mobile application development using Apple technologies. Participants learn design thinking, UI/UX design, and Swift programming fundamentals by building real iOS application prototypes. Throughout the program, students are trained to identify real-world problems, conduct user research, design intuitive interfaces, and present their final innovative solutions professionally",
    skills: ["SwiftUI", "iOS App Development", "UX Research", "Team Collaboration", "UI/UX Design", "Problem Solving", "Pitching" ],
    logo: "/assets/image/apple.png",
    file: "public/sertificate/applefoundation.pdf",
    badge: "iOS Development"
  },
    {
    id: "Postman",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "September 2025",
    type: "Professional Skills",
    description: "Completed the Postman API Fundamentals Student Expert program, demonstrating understanding of API basics, HTTP requests, JSON, API testing, and collaboration using Postman",
    skills: ["API Fundamentals", "HTTP Requests (GET, POST, PUT, DELETE)", "JSON Structure & Parameters", "API Testing & Documentation", "Prototyping", "Postman Workspace Collaboration", "Basic Automation & Assertions"],
    logo: "/assets/image/Postman.png",
    file: "public/sertificate/Sertificate.pdf",
    badge: "Postman Student Expert Badge"
  },
//   {
//     id: "cert-3",
//     title: "Your Next Certificate",
//     issuer: "Institution Name",
//     date: "Year",
//     type: "Certification Type",
//     description: "Brief description of the certificate and what you learned",
//     skills: ["Skill 1", "Skill 2", "Skill 3"],
//     logo: "/assets/image/cert-logo.png",
//     credentialUrl: "",
//     badge: "Category"
//   }
];

const CertificateCard = ({ item, index }) => {
  return (
    <article
      className="certificate-card reveal"
      tabIndex={0}
      aria-labelledby={`${item.id}-title`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="card-left">
        <div className="timeline-marker" aria-hidden="true">
          <span className="marker-dot" />
        </div>

        <div className="cert-logo" aria-hidden="true">
          <img
            src={item.logo}
            alt={`Logo ${item.issuer}`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="cert-logo-placeholder" style={{ display: 'none' }}>
            <span>🎓</span>
          </div>
        </div>

        <div className="meta">
          <div className="cert-date">{item.date}</div>
          <div className="cert-badge">{item.badge}</div>
        </div>
      </div>

      <div className="card-right">
        <div className="cert-header">
          <h3 id={`${item.id}-title`} className="cert-title">{item.title}</h3>
          <span className="cert-type">{item.type}</span>
        </div>
        
        <p className="cert-issuer">{item.issuer}</p>
        <p className="cert-description">{item.description}</p>

        <div className="cert-skills">
          {item.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>

        {item.file && (
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="file-download-btn"
          >
            View Certificate
          </a>
        )}
      </div>
    </article>
  );
};

const CertificateSection = () => {
  return (
    <section id="certificates" className="section certificate-section" aria-labelledby="certificate-title">
      <div className="certificate-container">
        <h2 id="certificate-title" className="section-title">Certificates & Training</h2>


        <div className="certificate-grid">
          <div className="timeline-line" aria-hidden="true" />
          {CERTIFICATES.map((item, i) => (
            <CertificateCard item={item} index={i} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;