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
    <>
      <AuthContextProvider>
                <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          
      </AuthContextProvider>
      <AuthContextProvider>
        <Routes>
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
    </>

  );
}

export default App;
