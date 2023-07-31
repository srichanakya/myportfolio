import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import '../Styles/WorkExperience.css'; // Import the CSS file for the WorkExperience component

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Set the threshold for the intersection
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div name="experience" id="experience" className="work-experience-container">
      <motion.div className="timeline">
        {/* First Card */}
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.div className="card">
            <motion.div className="timeline-content">
              <h3>
                <span className="company-name">Company Name</span>
                <span className="duration">Jan 2022 - Present</span>
              </h3>
              <p>Location</p>
              <p>Designation</p>
              <p>Role Description</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={ref}
        >
          <motion.div className="card">
            <motion.div className="timeline-content">
              <h3>
                <span className="company-name">Company Name</span>
                <span className="duration">Jan 2020 - Dec 2021</span>
              </h3>
              <p>Location</p>
              <p>Designation</p>
              <p>Role Description</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Add more cards here */}
      </motion.div>
    </div>
  );
}

export default Experience;
