import React from 'react'
import html from '../Assets/skillsicons/html5.svg';
import css from '../Assets/skillsicons/css3.svg';
import jasc from '../Assets/skillsicons/javascript.svg';
import rea from '../Assets/skillsicons/react.svg';
import nod from '../Assets/skillsicons/nodejs.svg';
import np from '../Assets/skillsicons/npm.svg';
import mon from '../Assets/skillsicons/mongodb.png';
import ms from '../Assets/skillsicons/mysql.svg';
import java from '../Assets/skillsicons/java1.png';
import python from '../Assets/skillsicons/python.svg';
import swift from '../Assets/skillsicons/swift.svg';
import github from '../Assets/skillsicons/github.svg';
import git from '../Assets/skillsicons/git.svg';




export default function Skills() {


  return (
    <div name="skills" id='skills' >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p id='skillsheading'>Skills</p>
        </div>
        
        <div className='w-full  grid grid-cols-2  sm:grid-cols-3 gap-8 skillscontainer'>
        
        <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500" >
                <img src={html} className="w-20  mx-auto"/>
            </div>
            
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                <img src={css} className="w-20  mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
                <img src={jasc} className="w-20  mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                <img src={rea} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-400">
                <img src={nod} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500">
                <img src={np} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                <img src={mon} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-300">
                <img src={ms} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
                <img src={java} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-blue-500/40 ">
                <img src={python} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
                <img src={swift} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500">
                <img src={github} className="w-20 mx-auto"/>
            </div>
            <div  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500">
                <img src={git} className="w-20 mx-auto"/>
            </div>
            
        </div>
      </div>
    </div>
  )
}
