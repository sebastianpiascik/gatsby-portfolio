import React from 'react'
import AboutIcons from './aboutIcons'
import Heading from './heading'

const About = () => (
  <>
    <Heading title="About me" subtitle="About me" />

    <div className="about">
      <div className="about__container container">
        <div className="about__inner row">
          <div className="about__content col-lg-9">
            <p>
              Hello! I am Sebastian Piaścik, a Freelance Front-end Developer who
              is passionate about creating rich user interfaces and interactive
              web applications using JavaScript technologies and libraries. I
              work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Grav, Wordpress, Symfony, Next.JS.
              <br />
              Futhermore, I have a strong understanding of JavaScript and the
              way the language works under the hood, alongside an excellent
              grasp of how Web Browsers operate, which allows me to quickly
              adapt to new tools and technologies.
            </p>
            <p>
              <span>
                I have a passion for creating clean and aesthetic interfaces.
                <br />
                My goal is to make the internet a more attractive and easier
                place to use.
              </span>
            </p>
            <AboutIcons />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default About
