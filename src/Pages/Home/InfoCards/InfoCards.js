import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: clock,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id: 2,
        name: 'Visit Our Locations',
        description: 'Tongi, Gazipur, Dhaka',
        icon: marker,
        bgClass: 'bg-accent'
    },
    {
        id: 3,
        name: 'Contact Us Now',
        description: '+880 178-4933595',
        icon: phone,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
]
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
        }
      </div>
    </div>
  );
};

export default InfoCards;