import React from 'react'
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Home/Carousel'
import About from '../../Components/Home/About'
import TopCat from '../../Components/Home/TopCat'
import Popular from '../../Components/Home/Popular'

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About/>
      <TopCat/>
      <Popular/>
    </>
  )
}

export default Homepage