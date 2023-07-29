import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Navbarcustom from './Components/Navbar';
import Home from './Components/Home';

function App(){


    return(
        <div>
            <Navbarcustom />

            <Home />
        </div>
    )

}

export default App;