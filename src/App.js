import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import img from "./components/images/bg.jpeg";

function App() {
  return (
    <div class="relative h-screen overflow-y-clip bg-indigo-900">
      <img
        src={img}
        class="absolute object-cover w-full h-full opacity-50"
      />
      <div class="absolute inset-0 bg-black opacity-25"></div>
      <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
          <div class="items-center justify-between md:flex">
            <div class="flex items-center justify-between">
              <a href="#" class="text-white">
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
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AuthContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
