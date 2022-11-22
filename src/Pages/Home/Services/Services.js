import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';     
import cavity from '../../../assets/images/cavity.png';         
import whitening from '../../../assets/images/whitening.png';
import serviceDisplay from '../../../assets/images/treatment.png';
import Service from './Service';

const Services = () => {
  const servicesData = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: cavity
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening
    },
]
  return (
    <div className='my-20 max-w-screen-xl mx-auto px-5 lg:px-0'>
       <div className='text-center'>
         <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
         <h2 className='text-3xl'>Services We Provide</h2>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-center'>
        {
          servicesData.map(service => <Service key={service.id} service={service}></Service>)
        }
       </div>

       <div className='px-32 my-36'>
       <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='ml-20'>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img
            src={serviceDisplay}
            className="rounded-lg w-2/5 shadow-2xl"
           alt=""/>
        </div>
       </div>
    </div>
  );
};

export default Services;