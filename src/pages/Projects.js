import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/hadith.png"
import project2 from "../../public/images/projects/unimaid.jpg"
import project3 from "../../public/images/projects/NURR456.jpg"
// import project15 from "../../public/images/projects/muhassconsult.png"
// import project16 from "../../public/images/projects/muhassconsult1.png"
import project4 from "../../public/images/projects/kasuwa.jpg"
import project5 from "../../public/images/projects/nft-collection-website-cover-image.jpg"
import project6 from "../../public/images/projects/sahiiih.png"
import project7 from "../../public/images/projects/fashion-studio-website.jpg"
import project14 from "../../public/images/projects/admin.jpg"
import project15 from "../../public/images/projects/CEPS.png"
import project16 from "../../public/images/projects/CONSULT.png"
import project17 from "../../public/images/projects/EASYLOAD.png"
import project18 from "../../public/images/projects/MTC.png"

import project8 from "../../public/images/projects/cryptocurrency-app.png"
import project9 from "../../public/images/projects/e-commerce-app.png"
import project10 from "../../public/images/projects/fooddelivery.jpg"
import project11 from "../../public/images/projects/food-recipe-app.png"
import project12 from "../../public/images/projects/online-learning-app.png"
import project13 from "../../public/images/projects/crypto-wallet-app.png"
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject =({type, title,summary,img ,link, github}) =>{
    return(
      <article className='w-full flex p-12 items-center
       justify-between rounded-br-2xl rounded-3xl relative 
       border border-solid border-dark bg-light shadow-2xl 
        dark:bg-dark  dark:border-light lg:flex-col
        lg:p-8 xs:rounded-2xl xs:br-3xl xs:p-4'>
          <div className='absolute top-0 -right-3 rounded-br-3xl
           -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark
            dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full 
            xs:rounded-[1.5rem] '/>
<Link href={link} target="_blank" className='w-1/2 cursor-pointer
 overflow-hidden rounded-lg lg:w-full'>
    <Image src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'/>
</Link>

<div className='w-1/2 flex flex-col items-start 
justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
    <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base '>{type}</span>
    <Link href={link} target="_blank" className='hover:underline 
    underline-offset-2'>
    <h2 className='py-2 w-full text-left text-4xl font-bold
     dark:text-light sm:text-sm'>{title}</h2>
    </Link>
    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
    <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10 '> <GithubIcon/></Link>
        <Link href={link} target="_blank" className='ml-4 sm:px-4 sm:text-base rounded-lg bg-dark text-ligh p-2 px-6 text-lg font-bold text-light dark:bg-light dark:text-dark'> Visit Project</Link> 
    </div>
    </div>


      </article>  
    )
}

const Project = ({type, title,img ,link, github}) =>{
    return(
<article className='w-full 
flex flex-col items-center justify-center rounded-2xl border 
border-solid border-dark bg-light p-6 relative
 dark:bg-dark dark:border-light xs:p-4'>
     <div className='absolute top-0 -right-3 rounded-br-3xl -z-10 w-[101%] h-[103%] 
      rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
<Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
    <Image src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'/>
</Link>
<div className='w-full flex flex-col items-start justify-between mt-4'>
    <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
    </Link>

    <div className='w-full mt-2 flex items-center justify-between'>
    <Link href={link} target="_blank" className='underline text-lg font-semibold md:text-base'> Visit </Link> 
        <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon/></Link>

    </div>
    </div>


      </article>  
    )
}


const Projects = () => {
  return (
   <>
   <Head> 
    <title>Web and Mobile Development Services in Nigeria | Nurmuhaxx, Projects Page </title>
    <meta name="description" content="Nigerian web and mobile developer, Affordable mobile app developer,Affordable web developer nigeria,professional web and mobile app developer Nigeria,
    best web and mobile app developer, web development services Nigeria,Experienced mobile app developer,responsive web developer nigeria,Android and ios app developer nigeria,cross platform app developer nigeria
    php web developer nigeria, front-end web developer nigeria, back-end web developer nigeria,E-commerce web developer nigeria,Best web developer Nigeria, Affordable web Developer nigeria,
    nigeria remote mobile app developer,web developer abuja,mobile app developer abuja"/>
   </Head>
   <TransitionEffect/>
   <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
<Layout className='pt-16'>
    <AnimatedText text="Little From What I Have Built" className='mb-16 lg:!text-7xl !uppercase sm:mb-8 sm:!text-6xl xs:!text-4xl '/>

    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
        <div className='col-span-12'>
          <FeaturedProject img={project16} title="Muhass Consult" summary="Muhass Consult is a user-friendly and secure consultancy application that connects patients with doctors from various locations" link="https://nurmuhass.github.io/muhassConsult_landingPage/" github="/" type="Featured Project"/>
        </div>

          <div className='col-span-12'>
          <FeaturedProject img={project15} title="Citizen Engagement Platform System" summary="Citizen Engagement Platform System is a platfrom where citizens reports incidence and reports from their local communities to the government " link="https://play.google.com/store/apps/details?id=com.andromo.dev703439.app991171&hl=en&gl=US" github="/" type="Featured Project"/>
        </div>

   <div className='col-span-12'>
          <FeaturedProject img={project14} title="A Professional Admin Panel" summary="A Professional Admin Dashboard that can be connected to any frontend using Readymate APIs.The Platform is developed using Next13,Prisma, Cloudinary and Clert authentication" link="https://admin-panel-mu-silk.vercel.app/c52b944a-c1b7-4374-86a3-d44226623563" 
        github="/" type="Featured Project"/>


        </div>
        
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project3} title="A Facebook Clone For University Of Maiduguri" link="" github="/" type="Featured Project"/>

        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project5} title="An NFT Collection Website Landing page "link="https://the-weirdos.netlify.app/" github="/" type="Featured Project"/>

        </div>



        <div className='col-span-12'>
          <FeaturedProject img={project4} title="Kasuwa MarketPlace" summary="Kasuwa is free and Safe buying and selling platform with advanced security system and
           easy navigation where you meet alot of new customers and advertise your product/skills for free." link="https://kasuwa.com.ng" github="/" type="Featured Project"/>


        </div>
      
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project6} title="An Android Audio
          App(Sahih Bukhari)"  link="https://play.google.com/store/apps/details?id=com.andromo.dev703439.app987792&hl=en&gl=US" github="/" type="Featured Project"/>

        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project7} title="A Stunning Fashion Studio Website with React JS" link="https://wibe-studio.netlify.app/" github="/" type="Featured Project"/>

        </div>

 <div className='col-span-12 sm:col-span-12'>
        <FeaturedProject img={project18} title="A crossplatform market place" summary="University of maiduguri main website developed
         for the university to depicts the image of the school." link="https://unimaid.edu.ng/About-US.php" github="/" type="Featured Project"/>

  </div>
            
        <div className='col-span-12 sm:col-span-12'>
        <FeaturedProject img={project2} title="A University Website" summary="University of maiduguri main website developed
         for the university to depicts the image of the school." link="https://unimaid.edu.ng/About-US.php" github="/" type="Featured Project"/>

        </div>


        <div className='col-span-6 sm:col-span-12'>
        <Project img={project9} title="An Online E-commerse App" link="https://play.google.com/store/apps/" github="/" type="Personal Project"/>

        </div>


        
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project10} title="A Complete Food Delivery App"  link="https://play.google.com/store/apps/" github="/" type="Personal Project"/>

        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project img={project17} title="A one Time stop VTU website" link="https://play.google.com/store/apps/" github="/" type="Web and Mobile App"/>

        </div>

        <div className='col-span-6 sm:col-span-12'>
        <Project img={project1} title="40 Hadith Nawawi"  link="https://play.google.com/store/apps/" github="/" type="Andriod application"/>

        </div>
     


    </div>
</Layout>
   </main>
   </>
  )
}

export default Projects
