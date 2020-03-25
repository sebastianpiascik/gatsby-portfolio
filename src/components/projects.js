import React from 'react'
import Heading from './heading'

export const Projects = () => (
  <>
    <Heading title="Projects" subtitle="Work done" isRight />

    <div className="project">
      <div className="project__container container">
        <div className="project__inner row">
          <div className="project__content col-lg-5">
            <h4>FINCH rolety</h4>
            <p>
              Firma specjalizuje się w systemach osłonowych na okna. Dostarczają
              profesjonalne rozwiązania dla każdego rodzaju wnętrz i budynków.
            </p>
            <a href="#">
              <button className="button button--color">Check website</button>
            </a>
          </div>
          <div className="project__image col-lg-7">
            <img
              src="/img/projects/03-finch/finch.png"
              alt="projekt strony internetowej"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="project project--right">
      <div className="project__container container">
        <div className="project__inner row">
          <div className="project__content col-lg-5">
            <h4>Revasiled</h4>
            <p>
              Projekt strony internetowej zrealizowany dla OK interactive.
              <br />
              REVA-SILED wspiera klientów w wyborze optymalnej obudowy, projektu
              fotometrycznego czy systemu zarządzania oświetleniem.
            </p>
            <a href="#">
              <button className="button button--color">Check website</button>
            </a>
          </div>
          <div className="project__image col-lg-7">
            <img
              src="/img/projects/02-sztukanauki/sztukanauki.png"
              alt="projekt strony internetowej"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Projects
