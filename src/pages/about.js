import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/Screenshot_20230627-164306.jpg"
import profilePic2 from "../../public/images/profile/007b3c2c-ec7a-41f6-bd3b-5326a011968d.jpeg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView,value, motionValue])

    useEffect(() => {
springValue.on("change",(latest) => {
    if(ref.current && latest.toFixed(0) <= value)
    {
        ref.current.textContent = latest.toFixed(0)
    }
})
    }, [springValue,value])

    return <span ref={ref}> </span>
}

const about = () => {
  return (
  <>
   <Head>
    <title>Web and Mobile Development Services in Nigeria | Nurmuhaxx | About Page</title>
    <meta name="description" content="Nigerian web and mobile developer, Affordable mobile app developer,Affordable web developer nigeria,professional web and mobile app developer Nigeria,
    best web and mobile app developer, web development services Nigeria,Experienced mobile app developer,responsive web developer nigeria,Android and ios app developer nigeria,cross platform app developer nigeria
    php web developer nigeria, front-end web developer nigeria, back-end web developer nigeria,E-commerce web developer nigeria,Best web developer Nigeria, Affordable web Developer nigeria,
    nigeria remote mobile app developer,web developer abuja,mobile app developer abuja"/>
   </Head>
   <TransitionEffect/>
   <main className='flex w-full flex-col items-center justify-center dark:text-light/75'>
   <Layout className='pt-16'>
    <AnimatedText text="we Transform Your Tech Ideas to Reality" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>About Me</h2>
            <p className='font-medium'>
            Hi, I am Nurmuhass, a web developer and Mobile App developer with a passion for creating Fullstack beautiful, functional, 
and user-centered digital experiences. With 6 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients visions to life.
            </p>

            <p className='font-medium '>
            I am capable of working on all aspects of web and mobile development,from clients side interfaces to server-side logic. 
            </p>

            <p className='font-medium my-4'>
            Whether I am working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
        </div>
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xs:p-1 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light'/>
    <Image src={profilePic2} alt="Nurmuhaxx" className='w-full h-auto rounded-2xl ' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'/>
</div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={50}/>+</span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied clients</h2>
    </div>

    <div  className='flex flex-col items-end justify-center xl:items-center'>
        <span  className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={40}/>+</span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project completed</h2>
    </div>

    <div  className='flex flex-col items-end justify-center xl:items-center'>
        <span  className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={6}/></span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
    </div>
</div>

    </div>
    <div>  
    </div>
    <Skills/>
    <Experience/>
    <Education/>
    </Layout>
   </main>
  </>
  )
}

export default about
