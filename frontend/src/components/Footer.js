import React, { useState } from 'react';
// import '../styles/Contact.css';
import { motion } from 'framer-motion';
import kc from '../images/kc.png';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: -200 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="bg-black w-screen h-screen mx-auto items-center text-white dark:bg-white dark:text-black"
    >
      <div className="container mx-auto p-6 flex flex-col justify-around h-full">
        <div className="footer_top">
          <p className="text-4xl md:max-w-[40%]">
            Let's create something memorable and timeless together.
          </p>
          <img src={kc} alt="kc" className="w-36 mt-6" />
        </div>
        <div>
          <h3 className="text-2xl mb-8">Links</h3>
          <div className="footer_bottom flex flex-col md:flex-row">
            <div className="links mr-24">
              <a href="/">
                Resume<span className="inline-block ml-2">→</span>
              </a>
              <p className="text-slate-400 mb-8">Read my CV</p>
              <a href="/">
                LinkedIn<span className="inline-block ml-2">→</span>
              </a>
              <p className="text-slate-400 mb-8">Connect with me on LinkedIn</p>
            </div>
            <div className="links">
              <a href="/">
                Github<span className="inline-block ml-2">→</span>
              </a>
              <p className="text-slate-400 mb-8">Where I share projects</p>
              <a href="/">
                Contact Me<span className="inline-block ml-2">→</span>
              </a>
              <p className="text-slate-400 mb-8">Get in touch with me</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
