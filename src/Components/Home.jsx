
import myImage from '../Assets/myImage.JPG';
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import reac from '../Assets/icon.png';
import {FcIdea} from 'react-icons/fc'
import Typical from 'react-typical';

function Home(){
    
    return (
        <div name="home" id='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
           <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h3 className='text-white text-4xl sm:text-7xl font-bold'> Hello, I am <span id='myname'>Sri Chanakya Yennana</span></h3>
                <h1 className='text-gray-500 pt-4 max-w-md text-white'>
                <Typical
        steps={['Full-Stack Developer 🧑‍💻', 3000, ' Data Scientist 💿', 3000,'VR Developer 🥽',3000,'iOS Developer 📱',3000]}
        loop={Infinity}
        wrapper="p"
      />
                </h1>
                <p id="mycontent" className='text-gray-500 pt-4 max-w-md'>
                With nearly two years of experience in software development and design, my current passion lies in crafting web applications. <span id='extracontent'>I take pleasure in creating user-friendly interfaces and implementing innovative solutions to ensure smooth and enjoyable user experiences. Keeping myself updated with the latest technologies is essential, 
                and I find joy in merging creativity with technical expertise in my projects.</span>
                </p>
                <div>
                <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-red-500 cursor-pointer'>
                    Hire me 
                    <span className='group-hover:scale-125 duration-300'>
                    <FcIdea size={25} className="ml-1"/>
                    </span>
                </button>
                <button id="cme" className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-stone-50 to-stone-400 cursor-pointer'>
                    Contact me 
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineArrowRightAlt size={25} className="ml-1"/>
                    </span>
                </button>
                
            </div>
            </div>
            <div>
                <img id="myimage" src={myImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
           </div>
        </div>
    )
}


export default Home;