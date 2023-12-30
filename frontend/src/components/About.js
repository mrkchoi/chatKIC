import React from 'react';
import { useParams } from 'react-router-dom';
import kc from '../images/kc.png';

import '../styles/About.css';

const About = () => {
  const { about_id } = useParams();
  console.log('about_id: ', about_id);
  return (
    <div className="about_wrapper">
      <div className="header_tagline_container">
        <h2 className="header_tagline">
          Currently caffeinated and ready to code.{' '}
          <span className="heart">♥</span>
        </h2>
      </div>
      <div className="card inner_wrapper text_content">
        <div className="about_content">
          <strong>
            I'm a software engineer driven by technical challenges, solving
            puzzles, and mastering new programming languages.
          </strong>{' '}
          My passion lies in crafting elegant, efficient code in collaborative
          environments. Writing, optimizing, and debugging are more than just
          tasks - they're my creative outlet, a playground for problem-solving
          and expression.<br></br>
          <br></br>
          <strong>My toolbox includes:</strong> JavaScript/Typescript, React,
          Redux/Undux, GraphQL, Relay, PHP/Hack, Ruby/Rails, Python, Node.js,
          Express, MongoDB, PostgreSQL, Git, HTML5, and CSS/SCSS.
          <br></br>
          <br></br>
          <strong>When I'm not writing code, you can find me:</strong> pounding
          the pavement on a jog, whipping up something delicious in the kitchen,
          diving into a non-fiction book, or strategizing my next chess move.
          <br></br>
          <br></br>
          <strong>Thank you for visiting my site!</strong> I'm eager to connect
          and explore the possibilities of collaborating on something amazing.
          <br></br>
          <br></br> Sincerely,
          <img alt="Kenneth Choi" src={kc} className="about_sign" />
          <div className="divider"></div>
          <section className="landing-skills">
            <h2>Skills</h2>
            <div className="landing-skills__main">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-python-plain"></i>
              <i className="devicon-php-plain"></i>
              <i className="devicon-ruby-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-amazonwebservices-plain-wordmark"></i>
              <i className="devicon-babel-plain"></i>
              <i className="devicon-d3js-plain"></i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
