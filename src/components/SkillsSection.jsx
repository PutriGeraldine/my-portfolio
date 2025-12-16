import "../css/SkillsSection.css";

/**
 * NOTE:
 * - caption pakai `label` (BUKAN nama file)
 * - gambar + caption = satu item dalam satu card
 * - aman buat portfolio
 */

const SKILLS_DATA = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "🔤",
    images: [
      { src: "/assets/skill/c9.jpg", label: "C", isLogo: true },
      { src: "/assets/skill/php.jpg", label: "PHP", isLogo: true },
      { src: "/assets/skill/python.png", label: "Python", isLogo: true },
      { src: "/assets/skill/java.png", label: "Java", isLogo: true },
      { src: "/assets/skill/html.jpg", label: "HTML", isLogo: true },
      { src: "/assets/skill/css.jpg", label: "CSS", isLogo: true },
      { src: "/assets/skill/js.jpg", label: "JavaScript", isLogo: true },
      { src: "/assets/skill/dart.jpg", label: "Dart", isLogo: true },
      { src: "/assets/skill/swift.jpg", label: "Swift", isLogo: true },
      { src: "/assets/skill/go.jpg", label: "Go", isLogo: true },
    ],
  },
  {
    id: "tools-dev",
    title: "Tools Development",
    icon: "🛠️",
    images: [
      { src: "/assets/skill/vsc.jpg", label: "VS Code", isLogo: true },
      { src: "/assets/skill/andro.jpg", label: "Android Studio", isLogo: true },
      { src: "/assets/skill/xcode.jpg", label: "Xcode", isLogo: true },
      { src: "/assets/skill/beans.png", label: "NetBeans", isLogo: true },
      { src: "/assets/skill/clipse.jpg", label: "Eclipse", isLogo: true },
      { src: "/assets/skill/git.jpg", label: "Git", isLogo: true },
      { src: "/assets/skill/github.jpg", label: "GitHub", isLogo: true },
    ],
  },
  {
    id: "tools-design",
    title: "Tools Design",
    icon: "🎨",
    images: [
      { src: "/assets/skill/figma.jpg", label: "Figma", isLogo: true },
      { src: "/assets/skill/star.jpg", label: "StarUML", isLogo: true },
      { src: "/assets/skill/bizagi.jpg", label: "Bizagi", isLogo: true },
      { src: "/assets/skill/draw.jpg", label: "Draw.io", isLogo: true },
      { src: "/assets/skill/canva.jpg", label: "Canva", isLogo: true },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "🧱",
    images: [
      { src: "/assets/skill/flutter.jpg", label: "Flutter", isLogo: true },
      { src: "/assets/skill/react.jpg", label: "React", isLogo: true },
      { src: "/assets/skill/laravel.jpg", label: "Laravel", isLogo: true },
      { src: "/assets/skill/node.jpg", label: "Node.js", isLogo: true },
      { src: "/assets/skill/boot.avif", label: "Bootstrap", isLogo: true },
    ],
  },
    {
    id: "tools4",
    title: "Tools Testing",
    icon: "🐞",
    images: [
      { src: "/assets/skill/unit.jpg", label: "JUnit", isLogo: true },
      { src: "/assets/skill/press.jpg", label: "Cypress", isLogo: true },
      { src: "/assets/skill/sele.png", label: "Selenium", isLogo: true },
      { src: "/assets/skill/pi.jpg", label: "Appium", isLogo: true },
      { src: "/assets/skill/kat.jpg", label: "Katalon", isLogo: true },
    ],
  },
  {
    id: "tools5",
    title: "Frameworks",
    icon: "🧱",
    images: [
      { src: "/assets/skill/flutter.jpg", label: "Flutter", isLogo: true },
      { src: "/assets/skill/react.jpg", label: "ReactJs", isLogo: true },
      { src: "/assets/skill/stream.png", label: "Stream Lit", isLogo: true },
      { src: "/assets/skill/laravel.jpg", label: "Laravel", isLogo: true },
      { src: "/assets/skill/boot.avif", label: "Bootstrap", isLogo: true },
      { src: "/assets/skill/node.jpg", label: "NodeJS", isLogo: true },
    ],
  },
  {
    id: "tools6",
    title: "Others",
    icon: "🗂️",
    images: [
      { src: "/assets/skill/powerbi.jpg", label: "PowerBI", isLogo: true },
      { src: "/assets/skill/trello.jpg", label: "Trello", isLogo: true },
      { src: "/assets/skill/loker.jpg", label: "Looker Studio", isLogo: true },
      { src: "/assets/skill/jupi.jpg", label: "Jupyter", isLogo: true },
      { src: "/assets/skill/colab.jpg", label: "Google Colaboratory", isLogo: true },
      { src: "/assets/skill/ana.png", label: "Anaconda", isLogo: true },
      { src: "/assets/skill/excel.png", label: "Excel", isLogo: true },
      { src: "/assets/skill/word.jpg", label: "Word", isLogo: true },
      { src: "/assets/skill/ppt.jpg", label: "Power Point", isLogo: true },
      { src: "/assets/skill/canva.jpg", label: "Canva", isLogo: true },
      { src: "/assets/skill/arduino.jpg", label: "Arduino", isLogo: true },
      { src: "/assets/skill/flow.png", label: "Flowgorithm", isLogo: true },
      { src: "/assets/skill/mini.png", label: "Minitab Statistical Software", isLogo: true },
      { src: "/assets/skill/scene.png", label: "Scene Builder", isLogo: true },
    ],
  },
];

function resolveImgPath(p) {
  if (!p) return "/assets/skill/placeholder.png";
  if (p.startsWith("http") || p.startsWith("/")) return p;
  return `/${p.replace(/^\/+/, "")}`;
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container fade-in">
        <h2 className="section-title">
          Skills <span>Expertise</span>
        </h2>
        <p className="section-sub">
          Tools & technologies I actually use, not just list for decoration.
        </p>

        <div className="skills-grid">
          {SKILLS_DATA.map((group) => {
            const count = group.images.length;
            const galleryClass =
              count === 1
                ? "skill-images single"
                : count <= 3
                ? "skill-images few"
                : count >= 10
                ? "skill-images many"
                : "skill-images";

            return (
              <article key={group.id} className="skill-panel">
                <div className="skill-header">
                  <div className="skill-icon">{group.icon}</div>
                  <div className="skill-title">{group.title}</div>
                </div>

                {/* IMAGE + CAPTION DALAM SATU CARD */}
                <div className={galleryClass}>
                  {group.images.map((img, i) => (
                    <div key={i} className="skill-image-item">
                      <div className="skill-image-wrap">
                        <img
                          src={resolveImgPath(img.src)}
                          alt={img.label}
                          className="skill-image logo"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/skill/placeholder.png";
                          }}
                        />
                      </div>
                      <div className="skill-caption">{img.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}