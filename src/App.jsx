import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Insurance from './components/pages/Insurance'
import Fleet from './components/pages/Fleet'
import Contact from './components/pages/Contact'
import Partners from './components/pages/Partners'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Fleet">
        <Fleet />
      </section>
      <section id="Insurance">
        <Insurance />
      </section>
      <section id="Partners">
        <Partners />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  )
}

export default App
