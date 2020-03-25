import React from 'react'

export const Heading = ({ title, subtitle, isRight = false }) => (
  <div className={`heading ${isRight && 'heading--right'}`}>
    <div className="heading__container container">
      <div className="heading__inner row">
        <div className="heading__content">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
      </div>
    </div>
  </div>
)

export default Heading
