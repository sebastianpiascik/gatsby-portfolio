import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wallpaper from '../components/wallpaper'
import Assets from '../components/assets'
import Projects from '../components/projects'
import About from '../components/about'
import Services from '../components/services'

export default () => (
  <Layout>
    <Wallpaper />
    <Assets />
    <Projects />
    <About />
    <Services />
  </Layout>
)
