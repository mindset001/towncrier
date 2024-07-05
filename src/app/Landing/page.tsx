import React from 'react'
import Header from '../Components/Header'
import Hero from './Hero'
import Tech from './Tech'
import Concept from './Concept'
import Town from './Town'
import Articles from '../Components/Media'

function Landing() {
  return (
    <main>
        <Header/>
       <div id='hero'>
       <Hero/>
       </div>
      
        <Articles/>
        <div >
        <Concept/>
        </div>
        {/* <Tech/>
        <Town/> */}
    </main>
  )
}

export default Landing