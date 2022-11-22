import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-[400px] mx-auto my-52 rounded-lg p-6 shadow-md">
      <form
        className="max-w-[400px] mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="text-xl text-center font-semibold">Login</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
          />
           {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: 'Password must be 6 characters or longer' }
          })}
            className="input input-bordered w-full"
          />
           {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
        </div>
        <p className='mb-4'>Forgot Password?</p>
        <input className="btn btn-accent w-full" value='Login' type="submit" />
      </form>
      <p className='text-center my-3'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new Account.</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
    </div>
  );
};

export default Login;
