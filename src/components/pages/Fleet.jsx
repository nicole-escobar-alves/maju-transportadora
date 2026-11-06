
import '../../style/Fleet.css'
import { Truck, Container, TruckIcon } from 'lucide-react'

function Fleet() {

  return (
    <section className="page-section fleet-content">
      <div className="section-container">
        <div className="fleet-header ">
          <h2>Nossa frota</h2>

          <p className="fleet-description">
            Nossa operação é composta por uma frota 100% própria,
            preparada para oferecer segurança, eficiência e
            flexibilidade no transporte de cargas.
          </p>
        </div>
        <div className="grid-layout fleet-grid">

          <div className="fleet-card">
            <div className="fleet-card-title" >
              <h2>07</h2>
              <Truck size={32} className="fleet-card-icon" />       
            </div>
            <h3>Cavalos Mecânicos</h3>
            <p>
              Veículos Scania equipados com sistema de
              rastreamento e monitoramento via satélite
              <strong> OnixSat</strong>.
            </p>
          </div>

          <div className="fleet-card">
            <div className="fleet-card-title" >
              <h2>13</h2>
              <Container size={32} className="fleet-card-icon" />
            </div>
            <h3>Implementos Rodoviários</h3>

            <p>
              Implementos tipo baú e sider, com carrocerias
              de 15,30m de comprimento e 2,80m de altura.
            </p>
            <p>
              Configuração versátil para cargas fechadas,
              com proteção contra intempéries, ou cargas
              paletizadas com abertura lateral total.
            </p>
          </div>

          <div className="fleet-card">
            <div className="fleet-card-title" >
              <h2>01</h2>
              <TruckIcon size={32} className="fleet-card-icon" />
            </div>
            <h3>Caminhão Mercedes-Benz 1620</h3>
            <p>
              Caminhão truck com carroceria sider,
              indicado para rotas regionais e operações
              que exigem agilidade operacional.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Fleet
