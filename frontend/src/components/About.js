import React from 'react';
import kc from '../images/kc.png';
import { motion } from 'framer-motion';

// import '../styles/About.css';

const About = () => {
  return (
    <div className="bg-white dark:bg-black">
      <motion.div
        className="container flex flex-col justify-around mt-24 mx-auto p-6 min-h-screen md:mt-48"
        initial={{ opacity: 0, scale: 0.75, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="about_top">
          <motion.p
            className="text-3xl mt-24 mb-16 md:text-6xl md:mb-24"
            initial={{ opacity: 0, scale: 0.75, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            Kenny Choi is a Full Stack Software Engineer experienced in
            enterprise development. He is driven by technical challenges and a
            love for collaboration. He aspires to create elegant solutions to
            complex problems.
          </motion.p>
        </div>
        <div className="about_bottom flex flex-col justify-between md:flex-row">
          <motion.div
            className="skills flex flex-col mb-24 lg:flex-row md:text-2xl"
            initial={{ opacity: 0, scale: 0.75, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="skills_first mr-12">
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3 transition-all duration-100 ease-linear">
                  →
                </span>
                Javascript/Typescript
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                React
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Redux/Undux
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                GraphQL
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Relay
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                HTML5
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Tailwind + CSS
              </p>
            </div>
            <div className="skills_second">
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Python
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Flask
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Ruby/Rails
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Node.js
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Express
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                NoSQL/SQL
              </p>
              <p className="group">
                <span className="inline-block mr-4 group-hover:translate-x-3  transition-all duration-100 ease-linear">
                  →
                </span>
                Git/Mercurial
              </p>
            </div>
          </motion.div>
          <motion.div
            className="quip md:max-w-[50%] text-xl"
            initial={{ opacity: 0, scale: 0.75, y: -200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {' '}
            <strong>When I'm not writing code, you can find me:</strong>{' '}
            pounding the pavement on a jog, whipping up something delicious in
            the kitchen, diving into a non-fiction book, or strategizing my next
            chess move.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
