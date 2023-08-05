import './App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

let scroller = ScrollSmoother.create({
	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	effects: true, // looks for data-speed and data-lag attributes on elements
	smoothTouch: 0, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	content: ".wp-site-blocks",
});

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
