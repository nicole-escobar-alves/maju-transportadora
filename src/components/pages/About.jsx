import '../../style/About.css'
import aboutMap from '../../assets/images/about_maju_map.png'
import { MapPinHouse } from 'lucide-react'

function About() {

  return (

    <section className="page-section about-content">
      <div className="section-container">
        <div className="grid-layout about-grid">
          <div className="about-description">
            <h2>MAJU Transportes</h2>
            <p>
              A Transportadora MAJU atua no segmento de transporte rodoviário de cargas desde 2010,
              garantindo as entregas com eficiência, segurança e comprometimento.
            </p>
             
            <p>
              Contamos com estrutura completa, equipada com tecnologia e sistemas
              especializados para a gestão de operações de transporte.
            </p>
            <ul>
              <li>
                <strong>Emissão de CT-e</strong> (Conhecimento de Transporte Eletrônico)
              </li>
              <li>
                <strong>MDF-e</strong> (Manifesto Eletrônico de Documentos Fiscais)
              </li>
              <li>
                <strong>NFS-e</strong> (Nota Fiscal de Serviços Eletrônica)
              </li>
              <li>
                <strong>CIOT</strong> (Código Identificador da Operação de Transporte)
              </li>
              <li>
                <strong>Serviço de Rastreamento</strong>
              </li>
            </ul>
            <br />
            <p> 
              Nossa equipe é formada por profissionais qualificados, comprometidos com a excelência no atendimento ao cliente e na execução de cada transporte.
            </p>
          </div>
          <div className="grid-left">
            <img
              src={aboutMap}
              className="about-image"
              alt="MAJU Transportadora"
            />

            <div className="about-location">
              <MapPinHouse size={24} className="about-card-icon" />
              <span>Camanducaia, Minas Gerais, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About