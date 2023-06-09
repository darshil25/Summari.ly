import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://darshil25.github.io/", "_blank")
          }
          className='black_btn'
        >
          PortFolio
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summari.ly is an open-source article summarizer that simplifies 
        lengthy articles into clear and concise summaries, saving users time and effort.
      </h2>
    </header>
  );
};

export default Hero;
