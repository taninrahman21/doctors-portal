import React from 'react';

const AppoinmentOption = ({appointmentOption, setTreatment}) => {
  const { name, slots } = appointmentOption;
  return (
      <div className="card shadow-md">
          <div className="card-body text-center">
              <h2 className="text-2xl text-secondary font-semibold text-center">{name}</h2>
              <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
              <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
              <div className="card-actions justify-center">
                  <label
                      htmlFor='booking-modal'
                      disabled={slots.length === 0}
                      className="btn btn-primary text-white"
                      onClick={() => setTreatment(appointmentOption)}
                  >Book Appointment</label>
              </div>
          </div>
      </div>
  );
};

export default AppoinmentOption;