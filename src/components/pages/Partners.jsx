import '../../style/Partners.css'

import logo_tocantins from '../../assets/images/logo_tocantins.png'
import logo_pacifico from '../../assets/images/logo_pacifico.png'
import logo_plumatex from '../../assets/images/logo_plumatex.png'
import logo_polibras from '../../assets/images/logo_polibras.png'
import logo_life_clean from '../../assets/images/logo_life_clean.png'
import logo_leggett_platt from '../../assets/images/logo_leggett_platt.png'

function Partners() {
  return (
    <section className="page-section partners-content">
      <div className="section-container">

        <div className="partner-header ">
          <h2>Parceiros</h2>

          <p className="partner-description">
            Empresas que confiam em nosso trabalho.
          </p>
        </div>

        <div className="partners-logos">
          <div className="partner-item">
            <img src={logo_tocantins} alt="Logo Tocantins" />
          </div>

          <div className="partner-item">
            <img src={logo_pacifico} alt="Logo Pacífico" />
          </div>

          <div className="partner-item">
            <img src={logo_plumatex} alt="Logo Plumatex" />
          </div>

          <div className="partner-item">
            <img src={logo_polibras} alt="Logo Polibras" />
          </div>

          <div className="partner-item">
            <img src={logo_life_clean} alt="Logo Life Clean" />
          </div>

          <div className="partner-item">
            <img src={logo_leggett_platt} alt="Logo Leggett & Platt" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partners