import '../../style/Contact.css'
import logo_maju from '../../assets/images/logo_maju.png'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  Phone,
  Mail,
  User,
  Tag,
  MapPin,
  MessageCircle,
  Send
} from 'lucide-react'

function Contact() {

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSending(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('Mensagem enviada com sucesso! Em breve entraremos em contato.')
      event.target.reset()

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setStatus('Não foi possível enviar sua mensagem. Tente novamente.')
    } finally {
      setSending(false)
    }
  }


  return (
    <section className="page-section-contact contact-content">
      <div className="section-container section-container-contact">
       
        <div className="grid-layout contact-grid">

          <div className="contact-left">

            {/* Logo */}
            <div className="contact-logo-maju">
              <img
                src={logo_maju}
                className="contact-image"
                alt="MAJU Transportadora"
              />
            </div>

            <p className="contact-description">
              Solicite seu orçamento ou tire suas dúvidas
              sobre nossos serviços.
            </p>

            {/* Dois cards lado a lado */}
            <div className="contact-cards">

              {/* Card 1: Telefone e E-mail */}
              <div className="contact-card">

                <div className="contact-detail">
                  <div className="contact-detail-heading">
                    <Phone size={20} />
                    <strong>Telefone</strong>
                  </div>

                  <p>(35) 98444-9872</p>
                  <p>Mário Antônio (Marinho)</p>

                  <p className="contact-second-phone">(35) 98401-0149</p>
                  <p>Tatiane Escobar</p>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-heading">
                    <Mail size={20} />
                    <strong>E-mail</strong>
                  </div>

                  <a href="mailto:maju_transportes@hotmail.com">
                    maju_transportes@hotmail.com
                  </a>
                </div>

              </div>

              {/* Card 2: Endereço e dados */}
              <div className="contact-card">

                <div className="contact-detail">
                  <div className="contact-detail-heading">
                    <MapPin size={20} />
                    <strong>Endereço</strong>
                  </div>

                  <p>Rua General Osório</p>
                  <p>Camanducaia – MG</p>
                  <p>CEP: 37650-000</p>
                </div>

                <div className="contact-company-data">
                  <p><strong>CNPJ:</strong> 05.529.731/0001-42</p>
                  <p><strong>I.E.:</strong> 001616565.00-74</p>
                  <p><strong>RNTRC:</strong> 44323622</p>
                </div>

              </div>

            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <div className="contact-form-container">

            <h3>Envie sua mensagem</h3>
            <span className="contact-title-line"></span>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-field">
                  <User size={20} />
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Nome completo *"
                    required
                  />
                </div>

                <div className="form-field">
                  <Mail size={20} />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="E-mail *"
                    required
                  />
                </div>

                <div className="form-field">
                  <Phone size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                  />
                </div>

                <div className="form-field">
                  <Tag size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                  />
                </div>

              </div>

              <div className="form-field form-message">
                <MessageCircle size={20} />
                <textarea
                  name="message"
                  placeholder="Como podemos ajudar? *"
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                <Send size={20} />
                {sending ? 'Enviando...' : 'Enviar por e-mail'}
              </button>

              {status && (
                <p className="form-status" role="status">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact