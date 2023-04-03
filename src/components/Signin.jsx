import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import img from "./images/bg.jpeg";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(error)
      alert(error)
    }
  };

  return (
    
      <>
      <div class="relative h-screen overflow-y-clip bg-indigo-900">
        <img src={img} alt="img" class="absolute object-cover w-full h-full opacity-50" />
        <div class="absolute inset-0 bg-black opacity-25"></div>
        <header class="absolute top-0 left-0 right-0 z-20">
          <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-between md:flex">
              <div class="flex items-center justify-between">
                <a href="/" class="text-white">
                  <svg
                    class="w-8 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Capa 1"
                    viewBox="0 0 16.16 12.57"
                  >
                    <defs></defs>
                    <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                    <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                  </svg>
                </a>
                <div class="md:hidden">
                  <button class="text-white focus:outline-none">
                    <svg
                      class="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="items-center hidden md:flex">
                <a
                  class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/account"
                >
                  Home
                </a>
                <a
                  class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/signup"
                >
                  Signup
                </a>
                <a
                  class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  SignIn
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-30">
          <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">

        <h1 class="mt-1 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {/* Let yourself be carried
                <br/>
              by nature */}
          Sign in to your account
        </h1>
        <br></br>
        <span class="font-bold text-white uppercase">
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </span>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
          </div>
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
            Sign In
          </button>
        </form>
        </div>
        </div>
          </div>


      </>
  );
};

export default Signin;