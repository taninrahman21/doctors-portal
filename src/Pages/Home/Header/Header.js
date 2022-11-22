import React from "react";
import headerImg from '../../../assets/images/chair.png';
import headerBg from '../../../assets/images/bg.png';
const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className='hero min-h-screen px-10 bg-cover bg-center bg-no-repeat' style={{background: `url(${headerBg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={headerImg}
            className="rounded-lg w-1/2 shadow-2xl"
           alt=""/>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
