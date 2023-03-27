import React from 'react'
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HouseLove from '../../components/houselove/HouseLove';
import MailList from '../../components/maillist/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/property/PropertyList';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <PropertyList/>
          <HouseLove/>
        </div>
        <MailList/>
        <Footer/>
    </div>
  )
}

export default Home