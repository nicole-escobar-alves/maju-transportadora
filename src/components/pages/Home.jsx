import '../../style/Home.css'
import logoMaju from '../../assets/images/logo_maju.png'

function Home() {

  return (
    <section className="page-section home-content">

      <div className="title-container">
        <h1 className="home-title">
          Transporte Rodoviário De Cargas.
        </h1>
      </div>

      <div className="logo_container">
        <img
          src={logoMaju}
          className="logo_maju"
          alt="MAJU Transportadora"
        />



      </div>
    </section>
  )
}

export default Home