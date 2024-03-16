import React, {useState} from 'react';
 import Hero from '../Components/Hero/Hero.jsx';
 import Popular from '../Components/Popular/Popular.jsx';
 import Offers from '../Components/Offers/Offers.jsx';

const Shop = () => {
    return(
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offers></Offers>
        </div>
    );
};

export default Shop;