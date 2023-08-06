import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Navbarcustom from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import React,{useState} from 'react';
import styles from '../src/style.css'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Socialmedia from './Components/Socialmedia';
import Contact from './Components/Contact';
// import EducationTimeline from './Components/EducationTimeline';
// import MenuExampleTabularOnLeft from './Components/Education';
import Projects from './Components/Projects';
// import 'semantic-ui-css/semantic.min.css'
import myprojectsdata from './JavaScript/data';
import Skills from './Components/Skills';
import Academics from './Components/Academics';
import academicdata from '../src/JavaScript/academicsdata';


function projectsmapping(data){
return <Projects key={data.id} title = {data.title} description = {data.description} pic = {data.pic} path={data.path} tech = {data.technologies} />
}

function mapacademics(data){
    return <Academics key={data.id} name = {data.name} degree = {data.degree} pic = {data.pic} duration={data.duration} gpa = {data.gpa}  />
    }

function App(){
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const [openModal, SetOpenModal] = React.useState(false);

    return(
        <div>
            <Navbarcustom />

            <Home />

            <About />
            <Experience />
            <div id='projects'>
            <h1 className='projectheading'>Projects</h1>
            <div id='projectscards'>
            
            {myprojectsdata.map(projectsmapping)}
            </div>


            <div id='academics'>
            <h1 className='academicheading'>Education</h1>
            <div id='academiccards'>
                {academicdata.map(mapacademics)}
            </div>
            </div>
           {/* <ModalExampleModal/> */}
           </div>
          <Skills />
            <Socialmedia />
            <Contact />

        </div>
    )

}

export default App;