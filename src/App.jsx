import { useEffect, useRef, useState } from 'react'

// Import components
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SkillsSection from './components/SkillsSection'
// import GallerySection from './components/GallerySection'
// import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
// import OrganizationSection from './components/OrganizationSection'
// import HighlightsSection from './components/HighlightsSection'
import CertificateSection from './components/CertificateSection'
// import QuoteSection from './components/QuoteSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'gallery', 'projects', 'education', 'organization', 'highlights','certificates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Intersection Observer untuk animasi scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Observe semua elemen yang perlu di-animate
    const elementsToObserve = document.querySelectorAll('.fade-in, .slide-up, .skill-card, .project-card, .gallery-item')
    elementsToObserve.forEach((el) => observerRef.current.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>

      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
      <EducationSection />
      {/* <OrganizationSection />
      <HighlightsSection /> */}
      <CertificateSection />
      <ContactSection />
      {/* <QuoteSection /> */}
      <Footer />
    </div>
  )
}

export default App