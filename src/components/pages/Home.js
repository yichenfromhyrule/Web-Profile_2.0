import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';

function Home () {
    return (
        <>
            <MainSection />
            <Cards />
            <Footer />
        </>
    )
}
export default Home;