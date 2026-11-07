
import '../../style/Differentials.css'

import {
  Truck,
  Satellite,
  ShieldCheck,
  Handshake
} from 'lucide-react'

const differentials = [
  {
    icon: Truck,
    title: 'Frota própria',
    description:
      'Contamos com frota própria de cavalos mecânicos, caminhões e implementos para garantir estrutura e autonomia para nossas operações.'
  },
  {
    icon: Satellite,
    title: 'Monitoramento',
    description:
      'Tecnologia de rastreamento via satélite OnixSat para monitoramento dos veículos durante as operações.'
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidade',
    description:
      'Cuidado e atenção em cada etapa do transporte, com responsabilidade sobre as cargas e operações.'
  },
  {
    icon: Handshake,
    title: 'Compromisso',
    description:
      'Valorizamos relações de confiança, com acompanhamento próximo e comunicação transparente com nossos clientes.'
  }
]

function Differentials() {
  return (
    <section
      id="Differentials"
      className="page-section differentials-section"
    >
      <div className="section-container">

        <div className="differentials-header">
          <span className="differentials-eyebrow">
            MAJU TRANSPORTADORA
          </span>

          <h2 className="differentials-title">
            O que nos diferencia?
          </h2>

          <p className="differentials-description">
            Estrutura, tecnologia e compromisso para transportar
            com responsabilidade.
          </p>
        </div>

        <div className="differentials-grid">
          {differentials.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                className="differential-card"
                key={index}
              >
                <div className="differential-icon">
                  <Icon size={32} strokeWidth={1.7} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Differentials
