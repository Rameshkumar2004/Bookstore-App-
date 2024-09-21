import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  return (
   <div className='flex h-screen items-center justify-center  '>
      <div id='my_model_3' className='border-[2px] rounded-lg shadow-lg'>
        <div className='flex justify-between p-2'>
        <h3 className='font-bold text-lg px-6   '>Signup</h3>
          <form method='dilog'>
            <Link to={"/"} className='  border-[2px] border-red-300 rounded-xl px-2 '>
              X</Link>
          </form>
          
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='px-6 py-2'>
         <div className='mt-4 space-y-2'>
            <span>Name</span> <br />
            <input type="text" placeholder='Enter your FullName' className='w-80 px-3 py-1 border rounded-md ' 
            {...register("Name", { required: true })}/>
            {errors.Name && <p  className='text-sm text-red-500'>Name is required.</p>}
          </div>
          <div className='mt-4 space-y-2'>
            <span>Email</span> <br />
            <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md ' 
            {...register("email", { required: true })}/>
            {errors.email && <p  className='text-sm text-red-500'>email is required.</p>}
          </div>
          <div className='mt-4 space-x-2'>
            <span>Password</span> <br />
            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md '
            {...register("password", { required: true })} />
             {errors.password && <p className='text-sm text-red-500'>password is required.</p>}
          </div>
          <div className='mt-4 flex justify-between gap-2'>
            <button type="submit" className='btn btn-primary  bg-pink-500 rounded-lg px-2 py-1'>Signup</button>
            <p className=' '>
              Have account?
                  <button
                    className='underline text-blue-500'>
                    Login
                  </button>
                </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
