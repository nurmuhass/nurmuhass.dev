import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react' 
import article1 from "../../public/images/articles/maxresdefault_live.png"
import article2 from "../../public/images/articles/1_Az-gnX8CWEv3pBlwlw1sfg.png"
import { motion, useMotionValue } from 'framer-motion'
import article3 from "../../public/images/articles/maco.jpg"
import article4 from "../../public/images/articles/nike.jpg"
import article5 from "../../public/images/articles/1_qUlxDdY3T-rDtJ4LhLGkEg.png"
import article6 from "../../public/images/articles/max3dive.jpg"
import article7 from "../../public/images/articles/2023-02-02-react-native-local-push-notifications.jpg"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({img, title, link}) =>{
    const x= useMotionValue(0);
    const y= useMotionValue(0);
    const imgRef =useRef(null);

    function handlemouse(event) {
imgRef.current.style.display ='inline-block';
x.set(event.pageX)
y.set(-10)


    }

    function handlemouseleave(event) {
        imgRef.current.style.display ='none';
        x.set(0)
        y.set(0)
         
    }

return(
    <Link href={link}  target="_blank"
    
    onMouseMove={handlemouse}
    onMouseLeave={handlemouseleave}

    >


    <h2 className='capitalize text-xl font-semibold hover:underline sm:font-normal'>{title}</h2>
    <FramerImage style={{x:x,y:y}} ref={imgRef} src={img} alt={title} 
    className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
    </Link>
   
)
}

const Article = ({img, title, date, link}) =>{
    return(
<motion.li initial={{y:200}} whileInView={{y:0,transition:0.5,ease:"easeInOut"}} 
className='relative w-full p-4 py-4 my-4 rounded-xl flex items-center
 justify-between bg-light text-dark
  first:mt-0 border border-solid border-dark border-r-4 
  border-b-4 dark:bg-dark dark:text-light
   dark:border-light sm:flex-col'>
<MovingImg title={title} img={img} link={link}/>
    <span className='text-primary font-semibold pl-4 dark:text-primaryDark 
    sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
</motion.li>
    )
}

const FeaturedArticles = ({img, title, time, summary, link}) =>{
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl  dark:bg-dark dark:border-light'>
             <div className='absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark  dark:bg-light'/>
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
    <FramerImage src={img} alt={title} className='w-full h-auto ' whileHover={{scale:1.05}} transition={{duration:0.2}} priority 
    sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'/>
</Link>
<Link href={link}  target="_blank">
<h2 className='capitalize text-2xl font-bold my-2 hover:underline
 dark:text-light xs:text-lg'>{title}</h2>
</Link>
<p className='text-sm mb-2 dark:text-light'>{summary}</p>
<span className='text-primary font-semibold  dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
   <Head> 
   <title>Web and Mobile Development Services in Nigeria | Nurmuhaxx, Blog Page </title>
    <meta name="description" content="Nigerian web and mobile developer, Affordable mobile app developer,Affordable web developer nigeria,professional web and mobile app developer Nigeria,
    best web and mobile app developer, web development services Nigeria,Experienced mobile app developer,responsive web developer nigeria,Android and ios app developer nigeria,cross platform app developer nigeria
    php web developer nigeria, front-end web developer nigeria, back-end web developer nigeria,E-commerce web developer nigeria,Best web developer Nigeria, Affordable web Developer nigeria,
    nigeria remote mobile app developer,web developer abuja,mobile app developer abuja"/>
   </Head>
   <TransitionEffect/>
<main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
    <Layout className='pt-16'>
        <AnimatedText  text="Explore our immaculate blog" 
        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
            <FeaturedArticles title="Integrating Stripe Payments in your E-commerce React Native App" summary="You’ve been working hard on your e-commerce app, and now it is time to start processing payments.

In this project-based tutorial, you will learn how to integrate Stripe to process payments in a React Native e-commerce application.
For that, we will use the Nike Project that we created in the previous episodes.

On the client side, we have a React Native application built with Expo.

We have a Rest API build with NodeJS and Express on the backend side.

This guide is meant to be used alongside our video tutorial:" time="
 9 min read" link="https://www.notjust.dev/blog/nike-stripe-payments-react-native" img={article1}/>

<FeaturedArticles title="The 2023 React JS Developer RoadMap" summary="Hello guys, if you want to become a React Developer in 2023 and looking for the best resources then you have come to the right place. Earlier, I have shared the best React.js courses, books, and
 best websites to learn React.js in 2023, and in this article, I am going to share the complete React Developer RoadMap. The React JS or simply React is one of the leading JavaScript libraries for developing front-end or GUI web applications.

 Backed by Facebook Design, React JS, also known as just React is has grown by leaps and bounds in recent years and became the de-facto library for component-based GUI development." time="
 16 min read" link="/" img={article2} />
        


        </ul>
<h2 className='font-bold text-4xl my-16 w-full text-center dark:text-light'>All Articles</h2>
<ul className=''>
<Article title="All the fundamental React.js concepts, jammed into this single Medium article" img={article5} date="2 may 2022" link="https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2"/>
<Article title="Building a MacOS App with React Native: Is it Possible?" img={article3} date="9 march 2023" link="https://www.notjust.dev/blog/react-native-macos"/>
<Article title="Nike App Backend: node.js, MongoDB, Redux Toolkit Query" img={article4} date="12 april 2023" link="https://www.notjust.dev/blog/nike-app-backend-with-nodejs-mongodb-redux-toolkit-query"/>
<Article title="A Beginner's Guide to 3D Animations in React Native with three.js" img={article6} date="10 febuary 2023" link="https://www.notjust.dev/blog/2023-02-17-3d-animations-in-react-native-with-threejs-nike-app"/>
<Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" img={article5} date="29 march 2023" link="/"/>
<Article title="Getting Started with React Native Local Push Notifications in React Native" img={article7} date="29 march 2023" link="/"/>
</ul>
    </Layout>
</main>

    </>
  )
}

export default articles
