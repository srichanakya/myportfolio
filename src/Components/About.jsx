

function About(){
    return (
        <div name="about" id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                       About 
                    </p>
                </div>
                <p className="text-xl mt-10 text-white"> I am Sri Chanaky Yennana, born in India, and my fascination with computers began during my early years. Completing my Bachelor's in Computer Science and Engineering from GITAM University, Visakhapatnam, was a significant milestone in my journey. Currently, I am eagerly pursuing a Master's in CS at UTD, where I continue to delve deeper into the world of technology.</p>

<p className="text-xl text-white mt-5">From a young age, I have harbored a genuine passion for creating applications that serve a meaningful purpose and positively impact people's lives. This passion drives me to constantly explore and innovate, seeking ways to make software that caters to the diverse needs of individuals across the globe.</p>

<p className="text-xl text-white mt-5 additional">With the knowledge and expertise I am gaining through my studies, I am determined to contribute to the advancement of technology and the development of user-friendly applications. My goal is to bring convenience, efficiency, and joy to people's lives through my work, leaving a lasting impression on the world of software development.</p>
                <br/>

                <br/>
                {/* <p className="text-xl  text-white">As a full-stack developer with specialized expertise in iOS development, I possess a comprehensive skill set that allows me to work on both the front-end and back-end of web applications. Additionally, my proficiency in iOS development enables me to design and build native applications specifically for Apple's iOS platform. This dual proficiency allows me to create end-to-end solutions, from conceptualizing and designing user interfaces to implementing server-side logic and database management. As a result, I can seamlessly bridge the gap between the user-facing experience and the underlying technical infrastructure, ensuring the delivery of robust and user-friendly applications for both web and iOS platforms.</p> */}
            </div>
        </div>
    )
}

export default About;