import React from 'react'
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export default function Contact() {



    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact w-full h-screen bg-gradient-to-b from-black to-gray-800  pt-20 text-white' id='contact'>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">Contact Me</p>
            <div className='pb-8 flex justify-center items-center'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2 py-10'>
                    <input 
                    type='text' 
                    name='name' placeholder='Your Name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none' />
                    <input 
                    type='text' 
                    name='email'  placeholder='Your Email address'
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus: outline-none' />
                    <textarea name="message" rows="10" placeholder='Enter your message to me'
                    className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"></textarea>

                    <button className=" text-white bg-gradient-to-b from-cyan-500
                     to-blue-500 px-6 pv-3 my-8 
                     mx-auto flex  items-center rounded-md hover: scale-110 duration-300">
                        Let's talk 
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
