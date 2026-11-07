import '../../style/Home.css'
import logoMaju from '../../assets/images/logo_maju.png'

function Home() {
  return (
    <section className="page-section home-content">

      <div className="section-container">

        <div className="title-container">
          <h1 >
            Transporte Rodoviário de Cargas.
          </h1>
        </div>

        <div className="logo_container">
          <img
            src={logoMaju}
            className="logo_maju"
            alt="MAJU Transportadora"
          />
        </div>

      </div>
    </section>
  )
}

export default Home