import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import CookieConsent from 'react-cookie-consent'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "data" } }) {
          edges {
            node {
              extension
              dir
              modifiedTime
            }
          }
        }
      }
    `
  )
  console.log(data)

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__inner row align-items-stretch">
            <div className="header__logo col-md-5">
              <Link to="/">
                <img src="/img/logo.svg" alt="logo" />
                <span>Sebastian Piaścik</span>
              </Link>
              <a href="#"></a>
            </div>
            <div className="header__nav col-md-7">
              <nav></nav>
            </div>
          </div>
        </div>
      </header>

      {children}

      <div className="heading">
        <div className="heading__container container">
          <div className="heading__inner row">
            <div className="heading__content">
              <h2>Contact</h2>
              <h4>Send me a message</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info" id="contact">
        <div className="contact-info__container container">
          <div className="contact-info__inner row">
            <div className="contact-info__section col-md-4">
              <img src="/img/icons/Contact-pin.svg" alt="ikona mapa" />
              <h5>Gdańsk, Poland</h5>
            </div>
            <div className="contact-info__section col-md-4">
              <img src="/img/icons/Contact-email.svg" alt="ikona mail" />
              <h5>sebastian.piascik97@gmail.com</h5>
            </div>
            <div className="contact-info__section col-md-4">
              <img src="/img/icons/Contact-phone.svg" alt="ikona telefon " />
              <h5>(+48) 530 133 179</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright__container container">
          <div className="copyright__inner row">
            <div className="copyright__content col-12">
              <p>&copy; 2020 - Sebastian Piaścik. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <div className="cookie-info">
          <div className="cookie-info__content">
            <p>
              Nasza strona używa ciasteczek. Korzystając ze strony akceptujesz
              politykę plików cookies.
            </p>
            <div className="cookie-info__button">Rozumiem</div>
          </div>
        </div>
      </CookieConsent>
    </>
  )
}
