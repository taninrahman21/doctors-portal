import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const handleSigiup = data => {
    console.log(data);
  }

  return (
    <div className="max-w-[400px] mx-auto my-36 rounded-lg p-6 shadow-md">
      <form onSubmit={handleSubmit(handleSigiup)} className="max-w-[400px] mx-auto">
        <h1 className="text-xl text-center font-semibold">Sign Up</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
           type="text"
           {...register("name")}
           className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} type="email" className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" className="input input-bordered w-full"
          />
        </div>
        <p className='mb-4'>Forgot Password?</p>
        <input className="btn btn-accent w-full" value='Signup' type="submit" />
      </form>
      <p className='text-center my-3'>Aready have an account? <Link className='text-secondary' to='/login'>Please Login.</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
    </div>
  );
};

export default SignUp;