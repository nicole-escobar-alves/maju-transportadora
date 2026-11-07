
import '../../style/About.css'

import {
  FileCheck,
  Truck,
  Receipt,
  ClipboardCheck,
  MapPin,
  MapPinHouse
} from 'lucide-react'

function About() {
  const operations = [
    {
      icon: FileCheck,
      title: 'CT-e',
      description: 'Conhecimento de Transporte Eletrônico'
    },
    {
      icon: Truck,
      title: 'MDF-e',
      description: 'Manifesto Eletrônico de Documentos Fiscais'
    },
    {
      icon: Receipt,
      title: 'NFS-e',
      description: 'Nota Fiscal de Serviços Eletrônica'
    },
    {
      icon: ClipboardCheck,
      title: 'CIOT',
      description: 'Identificação da Operação de Transporte'
    },
    {
      icon: MapPin,
      title: 'Rastreamento',
      description: 'Monitoramento dos veículos'
    }
  ]

  return (
    <section className="page-section about-content">
      <div className="section-container">
        <div className="about-description">

          <h2>MAJU Transportes</h2>

          <p>
            A Transportadora MAJU atua no segmento de transporte rodoviário
            de cargas desde 2010, garantindo as entregas com eficiência,
            segurança e comprometimento.
          </p>

          <p>
            Contamos com estrutura completa, equipada com tecnologia e
            sistemas especializados para a gestão de operações de transporte.
          </p>

          {/* Cards de operações */}
          <div className="operations-grid">
            {operations.map((operation) => {
              const Icon = operation.icon

              return (
                <article className="operation-card" key={operation.title}>
                  <div className="operation-icon">
                    <Icon size={24} />
                  </div>

                  <div className="operation-info">
                    <h3>{operation.title}</h3>
                    <p>{operation.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <p>
            Nossa equipe é formada por profissionais qualificados,
            comprometidos com a excelência no atendimento ao cliente
            e na execução de cada transporte.
          </p>

          <div className="about-location">
            <MapPinHouse size={24} className="about-card-icon" />
            <span>Camanducaia, Minas Gerais, Brasil</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
