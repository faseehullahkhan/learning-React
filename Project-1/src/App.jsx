import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Page1/>
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App