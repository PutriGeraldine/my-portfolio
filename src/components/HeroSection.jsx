import { useEffect, useRef, useState } from 'react'
import '../css/HeroSection.css'

const HeroSection = ({ scrollToSection }) => {
  const heroRef = useRef(null)
  const mainBoxesRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])
  const [currentImg, setCurrentImg] = useState(null)
  const [boxes, setBoxes] = useState([])
  const isZooming = useRef(false)
  const animationFrameRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  const handleBoxClick = (box) => {
    if (isZooming.current) return
    
    isZooming.current = true
    setTimeout(() => { isZooming.current = false }, 800)

    if (currentImg === box.id) {
      setCurrentImg(null)
    } else {
      setCurrentImg(box.id)
    }
  }

  return (
    <section id="home" className="section hero-section" ref={heroRef}>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>

      <div className="hero-container">
        <div className={`hero-content-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <div className="profile-image-wrapper">
              <img 
                src="/assets/image/tes.jpg"
                alt="Putri Geraldine Sihombing"
                className="profile-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200/8b5cf6/ffffff?text=PG';
                }}
              />
            </div>
            <h1 className="hero-title">
              <span className="title-line">Building the future, I'm</span>
              <span className="highlight">Putri Geraldine Alexsandra Sihombing</span>
            </h1>
            <p className="hero-subtitle">
              <span className="subtitle-text">Creative Designer & Quality Assurance</span>
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('experience')}
              >
                <span>Lihat Projek</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Hubungi Saya</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection