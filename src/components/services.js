import React from 'react'
import Heading from './heading'

export const Services = () => (
  <>
    <Heading title="Creation" subtitle="What i do" isRight />

    <div className="services">
      <div className="services__container container">
        <div className="services__inner row">
          <div className="services__single col-md-6">
            <div className="services__single__inner">
              <div className="services__single__image">
                <img src="/img/icons/Arrow.svg" alt="ikona" />
              </div>
              <div className="services__single__content">
                <h4>Website Creation</h4>
                <p>
                  I specialize in creating an outer layer of web pages. I take
                  care of RWD rules, adjusting the appearance of mobile devices
                  is very important to me.
                </p>
              </div>
            </div>
          </div>
          <div className="services__single col-md-6">
            <div className="services__single__inner">
              <div className="services__single__image">
                <img src="/img/icons/Arrow.svg" alt="ikona" />
              </div>
              <div className="services__single__content">
                <h4>Search Engine Optimalization</h4>
                <p>
                  I optimize the web pages to improve their search engine
                  position. I also guarantee acceleration of the pages and
                  reduce the load time.
                </p>
              </div>
            </div>
          </div>
          <div className="services__single col-md-6">
            <div className="services__single__inner">
              <div className="services__single__image">
                <img src="/img/icons/Arrow.svg" alt="ikona" />
              </div>
              <div className="services__single__content">
                <h4>Auction Templates</h4>
                <p>
                  My offer also consist creation of efficient auction templates
                </p>
              </div>
            </div>
          </div>
          <div className="services__single col-md-6">
            <div className="services__single__inner">
              <div className="services__single__image">
                <img src="/img/icons/Arrow.svg" alt="ikona" />
              </div>
              <div className="services__single__content">
                <h4>PSD to HTML</h4>
                <p>
                  I am creating HTML, CSS and JS files based on PSD template.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Services
