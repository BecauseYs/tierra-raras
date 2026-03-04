import React, { useState } from 'react';
import { social } from '../data/social';
import {Phone} from 'lucide-react'

const ContactWsp = () => {
  const whatsappBusinessLink = `https://wa.me/${social.whatsApp}`;

  const [isOpen, setIsOpen] = useState(true);

  // const toggleBoxWithTimer = () => {
  //   setIsOpen(false);
  //   setTimeout(() => {
  //     setIsOpen(true);
  //   }, 5000); // Cambia 5000 a la cantidad de milisegundos que desees
  // };

  if(!isOpen){
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const hoverEffect = `hover:scale-105`;
  const buttonAnimate = `animate-heart`;
  return (
    <div className="select-none">  
      {isOpen && (
          <div className='fixed bottom-9 right-24 rounded-md w-[190px]  lg:w-[200px] 2xl:w-[220px] h-[50px] lg:h-[50px] 2xl:h-[50px] bg-white drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all '>
            <a href={whatsappBusinessLink}
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
                title='tooltWsp'>
              <span className='text-sm font-semibold'>Haz tus consultas aquí!</span>
            </a>
        </div>
      )}
   
      <div
        className={`fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-green-400 drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all ${hoverEffect} ${buttonAnimate}`}
        onClick={handleClick}
      >
        <div
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-15' : 'rotate-0'
          }`}
        >
          <a 
            href={whatsappBusinessLink}
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            title='buttonWsp'
          >
            <Phone className={`{overflow-hidden rounded-full w-[30px] h-[30px] text-white flex items-center justify-center drop-shadow-lg shadow-black  transition-all ${hoverEffect}`} />
          </a>
        </div>
      </div>
      <div
        className={`fixed  right-8 rounded-full w-[60px] z-10 flex flex-col-reverse items-center gap-3 transition-all duration-500 transform ${
          isOpen ? 'bottom-28' : '-bottom-36 opacity-0'
        }`}
      >
      </div>
    </div>
  );
};

export default ContactWsp;
