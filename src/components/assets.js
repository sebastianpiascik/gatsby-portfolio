import React from 'react'
import Heading from './heading'

export const Assets = () => (
  <>
    <Heading title="Features" subtitle="Main assets" />

    <div className="features">
      <div className="features__container container">
        <div className="features__inner row">
          <div className="features__single col-md-4">
            <div className="features__single__icon">
              <img src="/img/icons/Heart.svg" alt="ikona atuty" />
            </div>
            <div className="feature-content">
              <h6>Stunning Design</h6>
              <p>
                I have a passion for creating clean and aesthetic website
                templates using new development trends.
              </p>
            </div>
          </div>
          <div className="features__single col-md-4">
            <div className="features__single__icon">
              <img src="/img/icons/Screen.svg" alt="ikona atuty" />
            </div>
            <div className="feature-content">
              <h6>Responsive Layout</h6>
              <p>
                All of my websites are created in a way to adapt to different
                devices, platforms or browsers.
              </p>
            </div>
          </div>
          <div className="features__single col-md-4">
            <div className="features__single__icon">
              <img src="/img/icons/Eye.svg" alt="ikona atuty" />
            </div>
            <div className="feature-content">
              <h6>Pixel Perfect</h6>
              <p>
                I am developing pixel-perfect websites and apps while
                maintaining a semantic, modular, and DRY code base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Assets
