import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({selectedDate}) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect( () => {
    fetch('appoinmentOptions.json')
    .then(res => res.json())
    .then(data => setAppoinmentOptions(data))
  }, [])
  return (
    <div className='max-w-screen-xl mx-auto my-28'>
      <p className="text-center text-2xl text-secondary">Available Appointments on {format(selectedDate, 'PP')}</p>
      <div className='grid grid-cols-3 gap-8 mt-24'>
        {
          appoinmentOptions.map(option => <AppoinmentOption 
          key={option._id} 
          appointmentOption={option}
          setTreatment={setTreatment}
          ></AppoinmentOption>)
        }
      </div>
      { treatment && <BookingModal
       selectedDate={selectedDate}
       treatment={treatment}
       setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppoinments;