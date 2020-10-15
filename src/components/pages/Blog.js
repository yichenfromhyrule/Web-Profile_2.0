import React from 'react';
import '../../App.css';
import ProductSection from '../ProductSection/ProductSection';
import { homeObjOne, homeObjTwo} from './Data';

export default function Blog() {
    return (
        <div>
            <h1 className='blog'>Products</h1>
            <ProductSection {...homeObjOne} />
            <ProductSection {...homeObjTwo} />
        </div>
    ) 
}