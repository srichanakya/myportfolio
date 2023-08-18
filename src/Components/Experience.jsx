import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CardContainer = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isHidden = rect.bottom < 0 || rect.top > window.innerHeight;
      container.style.opacity = isHidden ? 0 : 1;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the correct opacity

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div ref={containerRef} className="card-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <CardContainer>
        <p className="about-title">Experience</p>
        <div className="experience-card">
        <h4 className="job-title">Associate Software Engineer (ASE)</h4>
        <p>Accenture India Pvt.Ltd., | Aug 2020 - June 2022</p>
        <ul className='bullet-list'>
        <li>Developed an automation tool using Python and Node.js. for William Demant POS application, resulting in the differentiation 61 different reports across Europe, America, and Australia regions for 191 stores, leading to a reduction in manual efforts by 70%.</li>
<li>Worked as a .NET developer for DM, CRM, AX, and POS applications for William Demant and successfully delivered 9 CR’s, which improved the application performance by 20%.</li>
<li>Designed and implemented 491 automation test cases for DM and CRM web applications, that resulted in a 50% reduction in testing time and a 60% increase in test coverage. Recognized as the best performer of the month for this achievement.</li>
<li>Developed automation test scripts using Selenium (C#) and executed over 7400 scripts during the tenure, which led to a 75% reduction in testing time and an overall increase in product quality.</li>
<li>Collaborated with Hearing Aid team to provide support for users and resolved 291 remedies, resulting in a 90% improvement in customer satisfaction ratings. </li>

</ul>
      </div>

      </CardContainer>

      <CardContainer>
      <div className="experience-card">
        <h4 className="job-title">Intern</h4>
       <p>DRDL | May 2019</p>
        <ul className='bullet-list'>
        <li>Led development of a Microservices-based Health Monitoring System using web technologies, ensuring reliable system health monitoring.</li>
<li>Implemented WebSocket protocol for real-time communication, boosting system response time by 30% and data transfer speed by 40%.</li>
<li>Conducted end-to-end tests, reducing downtime by 60% and enhancing system reliability.</li>
<li>Collaborated across teams to integrate the system, achieving 50% better data accuracy and 20% improved performance.</li>

</ul>
      
</div>
      </CardContainer>
    </div>
  );
};

export default Experience;










