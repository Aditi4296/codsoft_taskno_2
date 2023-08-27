import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Properties from '../../components/properties/Properties'
import LikedProperties from '../../components/likedProperties/LikedProperties'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'

const Home = ()=> {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Property Types</h1>
                <Properties />
                <h1 className="homeTitle">Cherished Stays by Guests</h1>
                <LikedProperties />
                <Mail />
                <Footer />
            </div>
        </div>
    )
}

export default Home