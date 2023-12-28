import { useState } from 'react'
import './App.css'
import './index.css'
import Select from './Components/Select'
import Header from './Components/Header'
import Chooseplan from './Components/Chooseplan';
import Faq from './Components/Faq';
import Footer from './Components/Footer'



function App() {
 

  return (
    <>
    <div>
      <Header />
      <Select />
      <Chooseplan/>
      <Faq />
      <Footer />
    </div>
    </>
  )
}

export default App
