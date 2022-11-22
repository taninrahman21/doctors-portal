import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
    }
    console.log(booking);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
         <form onSubmit={handleBooking}>
         <input
            type="text"
            name="date"
            disabled
            defaultValue={format(selectedDate, "PP")}
            className="input input-bordered w-full mb-5 mt-10"
          />
          <select name="slot" className="select select-bordered w-full mb-5">
            
            {
              slots.map((slot, idx) => <option key={idx}>{slot}</option>)
            }
          </select>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full mb-5"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full mb-5"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full mb-5"
          />
          <input type="submit" className="btn btn-accent w-full" value="Submit" />
         </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
