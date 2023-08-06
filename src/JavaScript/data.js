import img1 from '../Assets/project1.jpg';
import img2 from '../Assets/note.jpg'
import img3 from '../Assets/news.jpg'
import img4 from '../Assets/house.jpg'
import img5 from '../Assets/python.jpg';

const myprojectsdata = [
    {
        id:1,
        title:"Movie Reservation System",
        description:"This feature-rich movie ticket reservation system offers a user-friendly interface with real-time seat availability updates. Secure authentication ensures personalized reservations, and an admin panel enables efficient movie database management. Robust error handling ensures a seamless user experience for online movie reservations.",
        technologies : ['Html','Css', 'JavaScript', 'Bootstrap', 'Nodejs', 'MongoDB'],
        pic:img1,
        path:"https://github.com/srichanakya/onlinemoviereservation"
    },
    
    {
        id:2,
        title:"Note Keeping",
        description:"I developed a powerful note-keeping app using React.js, demonstrating front-end web development expertise. It offers a user-friendly interface for creating, editing, and organizing notes with real-time updates. The app showcases React.js proficiency, state management, and responsive design, making it a valuable addition to my portfolio.",
        technologies:['html','css','React'],
        pic:img2,
        path:"https://github.com/srichanakya/NoteTaking"
    },
    {
        id:3,
        title:"News App",
        description:"Developed an iOS news app delivering up-to-date and personalized news content to users. Implemented engaging user interfaces and seamless data integration. Utilized the latest iOS development technologies to ensure optimal performance. Demonstrated a passion for delivering valuable news experiences through intuitive design and efficient functionality.",
        technologies : ['Swift','XCODE'],
        pic:img3,
        path:"https://github.com/srichanakya/IOS_NewsApp"
    },
    {
        id:4,
        title:"House Keeping Service",
        description:"Designed and built a comprehensive housekeeping room list allocation system, streamlining room assignments and tracking. Leveraged user-friendly interfaces for efficient task management and room status updates. Employed modern web technologies to ensure responsiveness and seamless user experience. Aiming to enhance hotel operations through improved organization and communication within the housekeeping department.",
        technologies : ['Html','Css', 'JavaScript', 'Bootstrap'],
        pic:img4,
        path:"https://github.com/srichanakya/Hotel-House-Keeping-Service"
    },
    {
        id:5,
        title:"NodePythonGUI",
        description:"Designed and developed a Python-based GUI application integrated with Node.js, providing a user-friendly and interactive interface. Leveraged the power of Python's capabilities and seamlessly integrated it with Node.js for enhanced functionality. Demonstrated expertise in bridging technologies to create cross-platform solutions for efficient user experiences. Resulted in a versatile and dynamic application catering to diverse user needs."
        ,technologies : ['python', 'Nodejs'],
        pic:img5,
        path:"https://github.com/srichanakya/NodePythonGUI"
    },

]


export default myprojectsdata;