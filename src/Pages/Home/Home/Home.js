import React from 'react';
import Header from '../Header/Header';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;