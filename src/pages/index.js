import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png";
import profilePic2 from "../../public/images/profile/3819622f-1ae0-49da-8cad-4209562ee562-removebg-preview.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
      <title>Web and Mobile Development Services in Nigeria | Nurmuhass </title>
    <meta name="description" content="Nigerian web and mobile developer, Affordable mobile app developer,Affordable web developer nigeria,professional web and mobile app developer Nigeria,
    best web and mobile app developer, web development services Nigeria,Experienced mobile app developer,responsive web developer nigeria,Android and ios app developer nigeria,cross platform app developer nigeria
    php web developer nigeria, front-end web developer nigeria, back-end web developer nigeria,E-commerce web developer nigeria,Best web developer Nigeria, Affordable web Developer nigeria,
    nigeria remote mobile app developer,web developer abuja,mobile app developer abuja"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            <Image src={profilePic2} alt='nurmuhass'
             className='w-full h-auto lg:hidden md:inline-block md:w-full' priority 
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'/>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <h1> 
              <AnimatedText text="FREELANCE MOBILE APP & WEBSITE DEVELOPER." className='!text-6xl 
              !text-left xl:!text-5xl lg:!text-center
               lg:!text=6xl md:!text-5xl sm:!text-3xl !capitalize'/>
              </h1>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xm'> As a skilled full-stack developer, I am dedicated to turning ideas into innovative web & Mobile applications. 
Explore my latest projects and articles, showcasing my expertise in Mobile and web development.
</p>

        <div className='flex items-center self-start mt-2 lg:self-center'>
            <Link href='/NURMUHASSCV.pdf' target={'_blank'} 
            className='flex items-center bg-dark
             text-light p-2.5 px-6 rounded-lg text-lg
              font-semibold hover:bg-light
               hover:text-dark border border-bold 
               border-transparent hover:border-dark dark:bg-light
                dark:text-dark hover:dark:bg-dark hover:dark:border-light
                 hover:dark:text-light md:p-2 md:px-4 md:text-base' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
            <Link href="mailto:nurmuhass@gmail.com"  target={'_blank'} className='ml-4 text-lg font-bold capitalize
             text-dark underline dark:text-light md:text-base'>Contact</Link>
        </div>
          </div>
         
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Nurmuhaxx' className='w-full h-auto'/>
        </div>
       
      </main>
    </>
  )
}
