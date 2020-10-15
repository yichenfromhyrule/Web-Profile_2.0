import React from 'react';
import '../../App.css';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import ProductSection from '../ProductSection/ProductSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home () {
    return (
        <>
            <MainSection />
            <ProductSection {...homeObjOne} />
            <ProductSection {...homeObjTwo} />
            <ProductSection {...homeObjThree} />
            <ProductSection {...homeObjFour} />
            <Footer />
        </>
    )
}
export default Home;