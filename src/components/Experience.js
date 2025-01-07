import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position,company, companyLink, time, address,work}) =>{
   
   const ref =useRef(null);

   return <li ref={ref} className='my-8 first:mt-0  last:mb-0 w-[60%] mx-auto 
   flex flex-col items-center justify-between md:w-[80%]'> 
       
       <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5 ,type:"spring"}}>
            <h3 className='capitalize font-bold
             text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary 
            capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
                {time}| {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
const ref =useRef(null)
const {scrollYProgress} = useScroll(
    {
        target:ref,
        offset:["start end", "center start"]
    }
)

  return (
    <div className='my-32'>
        <h2 className='font-bold text-8xl w-full text-center mb-12 md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
      
      <div  ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full  items-start justify-between ml-4 xs:ml-2'>
            <Details
            
position="Web and Mobile App Developer " company="Freelancer" 
time="2019-Present" companyLink="www.muhass.tech" address="Both Hybrid & Remotely" 
work="•	Proficient in both front-end and back-end development.
•	Creating visually appealing layouts and user interfaces.
•	Building cross-platform mobile applications using React Native framework.
•	Creating custom web and mobile solutions tailored to clients' specific needs and requirements.
•	Providing consultancy and guidance on the best technologies and approaches for the project.
•	Collaborating with clients to understand their goals and deliver high-quality solutions.
•	Building e-commerce websites and mobile apps with features such as product catalogs, shopping carts, and payment gateways.
•	Designing and implementing database structures using technologies like MySQL, MongoDB, or Firebase.
•	Ensuring app responsiveness and optimal performance on iOS and Android platforms
"

            />

<Details
            
            position="Web developer" company="ICT Center University of Maiduguri Borno State" 
            time="Feb 2022- November 2022" companyLink="www.unimaid.edu.ng" address="Bama Road Maiduguri Borno State" 
            work="•	Implementing responsive and user-friendly interfaces using HTML, CSS, and JavaScript.
            •	Ensuring cross-browser compatibility and optimizing website performance.
            •	Collaborating with designers to translate wireframes and mockups into code.
            •	Building server-side logic and database management using programming languages like PHP, Firebase or Mongo db.
            •	Implementing security measures and handling data encryption.
            •	Capable of working on all aspects of web development, from client-side interfaces to server-side logic.
            •	Ensuring a consistent and cohesive design throughout the website.
            •	Planning, organizing, and coordinating web development projects.
            •	Implementing security measures to protect websites from vulnerabilities and attacks.
            
            "
            
                        />

<Details
            
            position="OFFICER II" company="Police Health Maintenance Limited " 
            time="" 
               companyLink="https://www.phmlnigeria.com/" address="Jabi ,FCT Abuja " 
            work="•	Collaborated with cross-functional teams to design and develop custom applications to meet specific business needs.
            •	Led the successful deployment of  Register Conversion Application. 
            •	Provided efficient IT support to end-users, resolving hardware and software issues promptly.
            •	Managed and maintained the organization's IT infrastructure, ensuring seamless operations.
            "
            
                        />
        </ul>
      </div>
    </div>
  )
}

export default Experience
