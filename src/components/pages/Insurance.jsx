import '../../style/Insurance.css'
import { ShieldCheck } from 'lucide-react'
import insuranceBackground from '../../assets/images/insurance_background.webp'

function Insurance() {
  return (
    <section
      className="insurance-content"
      style={{
        backgroundImage: `
        linear-gradient(
          110deg,
          rgba(38, 55, 70, 0.96) 0%,
          rgba(38, 55, 70, 0.82) 45%,
          rgba(38, 55, 70, 0.15) 100%
        ),
        url(${insuranceBackground})
      `
      }}
    >
      <div className="insurance-overlay">
        <div className="section-container">

          <div className="insurance-header">
            <span className="insurance-label">
              SEGURANÇA E CONFIANÇA
            </span>

            <h2>Proteção em cada quilômetro.</h2>

            <p>
              A segurança das cargas e a tranquilidade
              dos nossos clientes são prioridades em
              cada operação da MAJU.
            </p>
          </div>

          <div className="grid-layout insurance-grid">

            <div className="insurance-card">
              <ShieldCheck size={32} />
              <h3>RCTR-C</h3>
              <p>
                Responsabilidade Civil do Transportador
                Rodoviário de Carga.
              </p>
            </div>

            <div className="insurance-card">
              <ShieldCheck size={32} />
              <h3>RCF-DC</h3>
              <p>
                Responsabilidade Civil Facultativa por
                Desaparecimento de Carga.
              </p>
            </div>

          </div>
          <div className="insurance-footer">
            <ShieldCheck size={20} />
            <span>
              Cobertura em todo o território nacional.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insurance