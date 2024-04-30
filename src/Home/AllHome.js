import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Product from './Product'
import ChooseUs from './ChooseUs'
import WeHelp from './WeHelp'
import Footer from '../Footer'

function AllHome() {
  return (
    <div>
   
       <Navbar/> 
       <Hero/>
       <Product/>
   
       <ChooseUs/>
       <WeHelp/>
       <Footer/>
    </div>
  )
}

export default AllHome