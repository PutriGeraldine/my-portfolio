import { useEffect, useState } from "react";
import "../css/ExperienceSection.css";

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openImage = (imgSrc) => {
    if (!imgSrc) return;
    setModalImage(imgSrc);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);


  const projects = [
  {
    date: "Nov 2023 - Dec 2023",
    title: "Building a static website for Rumah Makan Menara",
    company: "UI/UX Designer – Del Institute of Technology",
    description:
      "This project delivers a design prototype and HTML interface for the Menara Restaurant website. The design aims to clarify information flow, present menus and promotions in a structured way, and help users visualize the planned online ordering experience",
    highlights: [
      "Designed an intuitive online ordering system that simplified the customer journey and improved overall usability",
      "Enhanced ordering efficiency and customer engagement through clearer navigation and responsive layout optimization",
      "Performed consistent functional and UI testing, identifying and validating issues in every development cycle",
      "Contributed to more organized sales records and improved tracking of revenue and expenses"
    ],
    tech: ["Figma", "Visual Studio Code", "Enterprise Architect"],
    githubUrl: "https://github.com/PutriGeraldine/psw1.git",
    image: "/assets/image/home_menara.png"
  },
  {
    date: "Feb 2024 – Jul 2024",
    title: "Data Information Processing Website for HKBP Peanajagar Church",
    company: "UI/UX Designer, Quality Assurance – Del Institute of Technology",
    description:
      "The website is designed to help HKBP Peanajagar administrators manage and share church information efficiently, while members can easily access schedules, announcements, personal data, and other important updates. The login system ensures secure and organized content management.",
    highlights: [
      "Designed an intuitive layout to simplify church data management and improve user engagement",
      "Created multiple wireframes and improved user flows to ensure easier access for administrators and church members",
      "Conducted comprehensive functional and UI testing, reporting and validating bugs to increase system stability and reduce user errors",
      "Collaborated with a development team of four members to ensure a reliable and user friendly system deployment"
    ],
    tech: ["Figma", "Visual Studio Code", "StarUML", "Enterprise Architect", "Bizagi", "Draw.io", "Visual Paradigma"],
    githubUrl: "https://github.com/felixnatanaelbutarbutar/SISTEM-INFORMASI-HKBP_PEANAJAGAR.git",
    image: "/assets/image/home_hkbp.png"
  },
  {
    date: "Nov 2024 – Dec 2024",
    title: "Delshop Flutter App",
    company: "UI/UX Designer – Del Institute of Technology",
    description:
      "delshop_flutter_app is a mobile application developed using Flutter, specifically optimized for the Android platform. It is designed to support various digital-era needs, including activity management, data recording, and efficient information access. By utilizing modern technologies such as Flutter, Firebase, and REST API, the application delivers strong performance, structured architecture, and a consistent user interface based on Material Design. The project aims to provide a responsive, user-friendly, and scalable mobile solution for both end-users and businesses seeking flexible digital services",
    highlights: [
      "Designed user centered and visually appealing interfaces that enhanced digital interaction and improved workflow efficiency",
      "Focused on clear navigation, responsive layouts, and consistent visual elements across devices to deliver smooth user experiences",
      "Collaborated with six cross functional team members to translate business needs into functional design solutions",
      " Developed multiple wireframes and prototypes to support design validation and product decision making"
    ],
    tech: ["Visual Studio Code", "Figma"],
    githubUrl: "https://github.com/FerryBastian/Del_shop_mobile_application.git",
    image: "/assets/image/delshop.jpg"
  },
  {
    date: "Feb 2025 – Jun 2025",
    title: "Schedule and Task Management Application for SMA Negeri 1 Girsang Sipangan Bolon",
    company: "UI/UX Designer, Quality Assurance – Del Institute of Technology",
    description:
      "This application is developed to support attendance recording and task management at SMA Negeri 1 Girsang Sipangan Bolon. The system offers features such as class scheduling, task reminders, and digital submission and evaluation of assignments. With a user-friendly interface, the application helps teachers and students manage academic activities more effectively, efficiently, and in a modern, structured manner",
    highlights: [
      "Designed intuitive user interfaces and created seamless user experiences by developing wireframes and analyzing user flows for students and teachers",
      "Collaborated with a cross functional team of six members to improve task completion efficiency through clearer navigation and improved layout structure",
      "Conducted functional and UI testing to ensure the application met quality standards and maintained a consistent user experience",
      "Reported bugs and worked closely with developers to resolve issues before deployment, ensuring a stable and reliable release"
    ],
    tech: ["Visual Studio Code", "Figma", "StarUML", "Bizagi", "Enterprise Architect", "Katalon", "Apium", "Visual Paradigma", "Draw.io"],
    githubUrl: "https://github.com/vanchristjh/PROYEK-AKHIR-II-WEB.git",
    image: "/assets/image/login.png"
  },
  {
    date: "Jun 2025 – Jul 2025",
    title: "CalorieTrackerApp (CALORIZZ)",
    company: "UI/UX Designer, Quality Assurance – Infinite Learning ",
    description:
      "CalorieTrackerApp (CALORIZZ) is successfully designed as a practical solution for estimating calories from various types of foods, including homemade dishes and items without nutritional labels. The app offers flexible input methods such as food lists, manual entry, and food scanning, enabling users to calculate calories conveniently. This system is expected to support users in monitoring their eating habits and maintaining a healthier lifestyle",
    highlights: [
      "Designed a clean and intuitive interface using SwiftUI to help users track daily calorie intake",
      "Improved user onboarding and interaction by simplifying food scanning workflows and manual search features",
      "Performed continuous accuracy checks along with functional and UI testing to ensure a smooth and consistent user experience",
      " Identified and validated issues in each development iteration to maintain system reliability and support stable application performance"
    ],
    tech: ["XCode", "Roboflow"],
    githubUrl: "https://github.com/zensantomart017/CalorieTrackerApp-CALORIZZ.git",
    image: "/assets/image/7.jpg"
  }
];


  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Work Experience & Project</h2>

        <div className="projects-wrapper">
          <div className="category-header">
            <h3 className="category-title">Academic & Personal Projects</h3>
            <div className="category-line" />
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className={`project-card ${index >= 5 ? "last-row" : ""}`}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image full-visible"
                    onClick={() => openImage(project.image)}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="card-accent" />
                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                  <span className="project-date">{project.date}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

              <div className="github-container" style={{ marginTop: 12 }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {isOpen && modalImage && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image preview">
          <div className="lightbox-content">
            <button className="lightbox-close" aria-label="Close" onClick={closeImage}>✕</button>
            <div className="lightbox-main">
              <img src={modalImage} alt="preview" className="lightbox-image" />
            </div>
          </div>
          <div className="lightbox-backdrop" onClick={closeImage} />
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
