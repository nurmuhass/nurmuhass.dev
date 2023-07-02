import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info }) =>{
   
   const ref =useRef(null);

   return <li ref={ref} className='my-8 first:mt-0  last:mb-0 w-[60%] 
   mx-auto flex flex-col items-center justify-between  md:w-[80%]'> 
       
       <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5 ,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp; <a href={'/'} target='_blank' className='text-primary capitalize'></a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
                {time}| {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div> 
    </li>
}

const Education = () => {
const ref =useRef(null)
const {scrollYProgress} = useScroll(
    {
        target:ref,
        offset:["start end", "center start"]
    }
)

  return (
    <div className='my-32'>
        <h2 className='font-bold text-8xl w-full text-center mb-12 md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
      
      <div  ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full  items-start justify-between ml-4  xs:ml-2'>
            <Details
            
type="Bachelor Of Science In Computer Science" time="2017-2023" 
info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence." place=' Department of Mathematical sciences, University of Maiduguri '

            />

<Details
            
            type="National  Diploma In Electrical And Electronics Engineering	" time="2016-2018" 
            info="
            Communication Skills II,
            Algebra and Elementary Trigonometry,
            Computer Hardware ,
            Electrical Graphics,
            Electrical Engineering Science I,
            Communication Skills II,
            Calculus,
            Machine Tools Technology and Practice,
            Electrical Power I,
            Electrical Machines I,
            Electronics I,
            Electrical Engineering Science II,
            Electrical and Electronic Instrument I,
            Telecommunications I,
            Electrical Installation of Building,
            Technical Report Writing,
            Logic and Linear Algebra,
            Electrical Power II,
            Electrical Machines II," place='Ramat Polytechnic Maiduguri, Department Electrical And Electronics	Engineering  '
            
                        />
                         <Details
            
            type="Online Coursework" time="2016-TILL DATE" 
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering,cisco Networking." place='Coursera ,Cisco, And EdX'
            
                        />

        </ul>
      </div>
    </div>
  )
}

export default Education
