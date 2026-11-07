
import { useEffect, useState, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import '../style/Header.css'

import { WHATSAPP_LINK } from '../config/Contact'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#Home')

  const headerRef = useRef(null)

  const navLinks = [
    { label: 'Início', href: '#Home' },
    { label: 'Empresa', href: '#About' },
    { label: 'Diferencial', href: '#Differentials' },
    { label: 'Frota', href: '#Fleet' },
    { label: 'Seguro', href: '#Insurance' },
    { label: 'Contato', href: '#Contact' },
  ]

  // Fecha o menu ao clicar fora ou pressionar ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Identifica a seção atualmente visível
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          )
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href) => {
    setActiveSection(href)
    setMenuOpen(false)
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">

        <nav
          id="main-navigation"
          className={`header-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="header-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="header-whatsapp"
        >
          <FaWhatsapp size={22} />
          <span>Fale conosco</span>
        </a>

      </div>
    </header>
  )
}

export default Header
