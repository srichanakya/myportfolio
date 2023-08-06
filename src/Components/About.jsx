import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import '../Styles/About.css'; // Import the CSS file for the About component

function About() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementOffset = document.getElementById('about').offsetTop;
    const elementHeight = document.getElementById('about').offsetHeight;

    // Check if the element is in the viewport
    if (scrollY > elementOffset - windowHeight && scrollY < elementOffset + elementHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div name="about" id="about" className="about-container">
      <motion.div
        className="about-content"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'} // Use the isVisible state to determine which variant to use
        variants={fadeInUpVariants}
      >
        <motion.div className="about-heading" variants={fadeInRightVariants}>
          <p className="about-title">About</p>
        </motion.div>
        <motion.p className="about-text" variants={fadeInUpVariants}>
        I am Sri Chanaky Yennana, born in India, and my fascination with computers began during my early years.
          Completing my Bachelor's in Computer Science and Engineering from GITAM University, Visakhapatnam, was a
          significant milestone in my journey. Currently, I am eagerly pursuing a Master's in CS at UTD, where I continue
          to delve deeper into the world of technology.

        </motion.p>

        <motion.p className="about-text" variants={fadeInUpVariants}>
        From a young age, I have harbored a genuine passion for creating applications that serve a meaningful purpose and
          positively impact people's lives. This passion drives me to constantly explore and innovate, seeking ways to make
          software that caters to the diverse needs of individuals across the globe.
        </motion.p>

        <motion.p className="about-text additional" variants={fadeInUpVariants}>
        With the knowledge and expertise I am gaining through my studies, I am determined to contribute to the advancement
          of technology and the development of user-friendly applications. My goal is to bring convenience, efficiency, and
          joy to people's lives through my work, leaving a lasting impression on the world of software development.

        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default About;
