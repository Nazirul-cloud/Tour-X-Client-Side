import React from 'react';
import Destination from '../../Destinattion/Destination';
import Banner from '../Banner/Banner';
import Guides from '../Guides/Guides'
import Service from '../Service/Service';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destination></Destination>
            <Service></Service>
            <Guides></Guides>
        </div>
    );
};

export default Home;