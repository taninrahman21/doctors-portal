import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
  return (
    <section className='mt-32 px-32'
    style={{
        background: `url(${appointment})`
    }}
        >
            <div className="flex">
                <div className='w-1/2 bottom-0'>
                   <img src={doctor} alt="" className="-mt-24 hidden md:block rounded-lg" />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h4 className='text-lg text-primary font-semibold'>Appointment</h4>
                    <h1 className=" text-white text-4xl font-bold">Make an Appointment Today</h1>
                    <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="w-fit btn btn-primary">Get Started</button>
                </div>
            </div>
    </section>
  );
};

export default MakeAppoinment;