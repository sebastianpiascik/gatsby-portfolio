import React from 'react'
import { Link } from 'gatsby'

const Wallpaper = () => (
  <div className="wallpaper">
    <div className="wallpaper__background">
      <img src="/img/wallpaper/1.jpg" alt="tło" />
    </div>
    <div className="wallpaper__container container">
      <div className="wallpaper__inner row">
        <div className="wallpaper__content col-12">
          <h1>
            <b>Hello,</b> I am
            <br />
            Front-end Developer
          </h1>
          <h3>
            I am developing websites with
            <br />
            attention to every detail.
          </h3>
          <div className="wallpaper__buttons">
            <Link to="/">
              <div className="button">See portfolio</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Wallpaper
