import React from 'react';
import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function IntrusionAlert() {

  const { user } = UserAuth();
//   const navigate = useNavigate();
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    var templateParams = {
        'to_name': user.name,
        'to_email': user.email
    };
    console.log(user)
    emailjs.send('service_7f5gh8r', 'template_hzxmu02', templateParams,'xyqO1CSolcjmYGPoi')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <button className="border border-red-500 bg-red-600 hover:bg-red-500 p-5  my-4 text-white" onClick={sendEmail}>intrusion Alert</button>
      
  );
}