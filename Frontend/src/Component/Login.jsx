import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ dialogRef }) {

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className=''>
      <dialog ref={dialogRef} id='my_model_3' className='model rounded-lg'>
        <div className='model-box py-2'>
          <button 
            type="button" 
            className='btn btn-sm btn-circle btn-ghost absolute right-1 top-2 rounded-full border-2 px-2 py-1'
            onClick={closeDialog}
          >
            X
          </button>
          <h3 className='font-bold text-lg px-6'>Login</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='px-6 py-2'>
          <div className='mt-4 space-y-2'>
            <span>Email</span> <br />
            <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md'
            {...register("email", { required: true })} />
            {errors.email && <p  className='text-sm text-red-500'>email is required.</p>}
          </div>
          <div className='mt-4 space-x-4'>
            <span>Password</span> <br />
            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md'
            {...register("password", { required: true })} />
            {errors.password && <p className='text-sm text-red-500'>password is required.</p>}
          </div>
          <div className='mt-4 flex justify-between gap-2'>
            <button type="submit" className='btn btn-primary bg-pink-500 rounded-lg px-2 py-1'>Login</button>
            <p className=''>
              Not registered?{" "}
              <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                Signup
              </Link>
            </p>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
