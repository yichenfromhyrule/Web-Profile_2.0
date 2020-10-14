import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import ProductSection from '../ProductSection/ProductSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Blog() {
    return (
        <div>
            <h1 className='blog'>Blog</h1>
            <Cards />
            <ProductSection {...homeObjOne} />
            <ProductSection {...homeObjThree} />
        </div>
    ) 
}