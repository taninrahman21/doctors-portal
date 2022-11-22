import React from 'react';
import headerImg from '../../../assets/images/chair.png';
import headerBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <div className="max-w-screen-xl mx-auto">
    <div className='hero px-10 py-10 bg-cover bg-center bg-no-repeat' style={{background: `url(${headerBg})`}}>
      <div className="hero-content flex-col justify-center lg:flex-row-reverse">
        <img
          src={headerImg}
          className="rounded-lg w-1/2 shadow-2xl"
         alt=""/>
        <div className='lg:w-1/2 lg:ml-32'>
            <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
             />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AppoinmentBanner;