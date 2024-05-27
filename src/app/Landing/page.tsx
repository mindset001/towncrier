import React from 'react'
import Header from '../Components/Header'
import Hero from './Hero'
import Tech from './Tech'
import Concept from './Concept'
import Town from './Town'

function Landing() {
  return (
    <main>
        <Header/>
        <Hero/>
        <Concept/>
        <Tech/>
        <Town/>
    </main>
  )
}

export default Landing