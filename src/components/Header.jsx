import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import '../style/Header.css'

import { WHATSAPP_LINK } from '../config/Contact'

function Header() {
  const navLinks = [
    { label: 'Início', href: '#Home' },
    { label: 'A empresa', href: '#About' },

    { label: 'Frota', href: '#Fleet' },
    { label: 'Seguro', href: '#Insurance' },
    { label: 'Contato', href: '#Contact' },
  ]

 
  const [activeSection, setActiveSection] = useState('#Home')

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
          setActiveSection(`#${visibleSections[0].target.id}`)
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

  return (
    <header className={"header"}>
      <div className="header-container">
        <nav className="header-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href}
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={() => setActiveSection(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>


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