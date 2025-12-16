import "../css/AboutSection.css";

const IconDownload = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 10l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15V3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEye = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const AboutSection = () => {
  const cvPath = "/assets/pdf/CV_PutriGeraldineAlexsandraSihombing.pdf";
  const encodedPath = encodeURI(cvPath); // penting kalau ada spasi

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(encodedPath, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Buat elemen <a> untuk download
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_PutriGeraldineAlexsandraSihombing.pdf";
      link.style.display = "none";
      
      // Tambahkan ke body, klik, lalu hapus
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup URL
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 100);
      
    } catch (error) {
      console.error("Download error:", error);
      
      // Fallback: buka langsung di tab baru
      try {
        window.open(cvPath, "_blank", "noopener,noreferrer");
      } catch (openError) {
        console.error("Failed to open CV:", openError);
        alert("Gagal mendownload CV. Silakan coba lagi atau hubungi saya melalui email.");
      }
    }
  };

  return (
    <section id="about" className="about-section fade-in">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-info">
          <h2 className="sec-title">
            About <span>Me</span>
          </h2>
          <p className="sec-desc">Turning ideas into interactive digital experiences 🚀</p>
          <p className="about-text">
            I am a final-year Information Technology student at Del Institute of Technology with strong interests in software
            development, UI/UX design, and quality assurance. Throughout my studies, I have gained hands-on experience
            in designing user-centered digital interfaces and performing structured testing to ensure system functionality,
            performance, and reliability. Actively involved in technology-based organizational activities, I have strengthened
            my teamwork, communication, and adaptability skills. I am known as a responsible, detail-oriented, and highly
            motivated individual who enjoys solving problems and delivering user-friendly solutions. I am eager to apply my
            skills in real-world projects and contribute meaningfully to professional environments, both independently and
            within a collaborative team.
          </p>

          <div className="flex gap-2">
            {/* VIEW button: buka di tab baru */}
            <a
              className="btn-outline flex items-center gap-2"
              href={encodedPath}
              target="_blank"
              rel="noopener noreferrer"
              title="Lihat CV (buka di tab baru)"
            >
            </a>

            {/* DOWNLOAD button: pakai fetch -> blob */}
            <button
              className="wow"
              onClick={handleDownload}
              title="Download CV"
              type="button"
            >
              <IconDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-cards">
          <div className="profile-card glass-card">
            <h3 className="profile-name">Putri Geraldine</h3>
            <p className="profile-role">UI/UX Designer • Quality Assurance • Front-End Developer</p>
            <p className="profile-note">Focused on human-centered digital products</p>
          </div>

          <a className="contact-card glass-card" href="tel:+6281275647104">
            📞 <span>+62 812-7564-7104</span>
          </a>

          <a className="contact-card glass-card" href="mailto:putrigeraldine@gmail.com">
            ✉️ <span>putrisihombing180705@gmail.com</span>
          </a>

          <a className="contact-card glass-card" href="https://putrigeraldine.my.id" target="_blank" rel="noreferrer">
            🔗 <span>putrigeraldine.my.id</span>
          </a>

          <div className="contact-card glass-card">
            📍 <span>Sumatera Utara, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
