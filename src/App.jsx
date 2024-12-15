import React from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
     
      <Header/>
      <About/>
     <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

