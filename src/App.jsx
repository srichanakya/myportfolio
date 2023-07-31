import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Navbarcustom from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import styles from '../src/style.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Socialmedia from './Components/Socialmedia';
import Contact from './Components/Contact';
function App(){
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return(
        <div>
            <Navbarcustom />

            <Home />

            <About />
            <Experience />
            

            <Socialmedia />
            <Contact />

        </div>
    )

}

export default App;