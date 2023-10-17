import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Aidea from "../../public/images/projects/aidea.png"
import FinanceProject from "../../public/images/projects/bootcamp.jpg"
import Airbnb from "../../public/images/projects/Airbnb_Redone.png"
import TransitionEffect from '@/components/TransitionEffect'
import GPT4 from "../../public/images/projects/aitools.png"
import Marshmallow from "../../public/images/projects/Marshmallow.png"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            > 
                <Image src={img} alt={title} className="w-full h-auto rounded-md hover:scale-105 transition  duration-300 ease-in-out" priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>


            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl  xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold  sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>

                <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                
                sm:px-4 sm:text-base
                ">Visit Project</Link>
                </div>
            </div>
           

        </article>
    )
}

// const Project = ({title, type,  img, link, github}) => {
//     return (
//         <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
//             <Link href={link} target="_blank"
//             className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
//             > 
//                 <Image src={img} alt={title} className="w-full h-auto" />
//             </Link>

//             <div className="w-1/2 flex flex-col items-start justify-between pl-6">
//                 <span className="text-primary font-medium text-xl">{type}</span>
//                 <Link href={link} target="_blank" className="hover:underline underline-offset-2">
//                     <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
//                 </Link>
//                 <p className="my-2 font-medium text-dark">{summary}</p>

//                 <div className="mt-2 flex items-center">
//                 <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
//                 <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">Visit Project</Link>
//                 </div>
//             </div>
           

//         </article>
//     )
// }


export default function Projects() {
  return (
    <>
        <Head>
            <title>Fadila | Projects Page</title>
            <meta name="description" content="any description you want" />
        </Head>


        <TransitionEffect />
        
        <main className=' w-full mb-16 flex flex-col items-center justify-center '>
            <Layout className="pt-16">
                <AnimatedText 
                text="Imagination Trumps Knowledge!" 
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <div className="grid grid-cols-12 gap-24 pt-5 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject 
                        type="Artificial Intelligence Project"
                        title="AI Workspace"
                        summary="A Notion-like application that empowers users to seamlessly take notes, efficiently organize their projects, and optimize their workflow with the help of Artificial Intelligence. With intelligent tagging, task management, and personalized suggestions, our app streamlines the user's workflow and boosts productivity."
                        img={Aidea}
                        link="https://idea-fusion.onrender.com/"
                        github="https://github.com/bkhoo123/Idea-Fusion"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Financial Trading Website"
                            title="Bootcamp Brokers"
                            summary="Experience paper-trading like never before with our Robinhood clone - featuring real-time stock data, visually engaging data visualizations, and a context-aware chatbot for seamless support."
                            img={FinanceProject}
                            link="https://bootcampbrokers.onrender.com/"
                            github="https://github.com/Marcus-Kim/Bootcamp-Brokers"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="A place to host your Homes (Airbnb Clone)"
                            title="Air Space"
                            summary="A place to host your homes, book them, and enjoy vacation time designed with Airbnb in mind"
                            img={Airbnb}
                            link="https://airbnb-re-done.vercel.app/"
                            github="https://github.com/bkhoo123/AirbnbReDone"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="Article / Journal Summarizer Only Needs URL"
                            title="GPT-4 Summarizer"
                            summary="Have you ever wanted to just only input your URL and get a summary of the content of that webpage. Look no further than this web application that can do that for you. All you have to do is enter your URL and it will summarize the page for you."
                            img={GPT4}
                            link="https://ai-workflow-tools.vercel.app/"
                            github="https://github.com/bkhoo123/GPT4-Tool"
                        />
                    </div>

                    <div className="col-span-12">
                        <FeaturedProject 
                            type="A Marshmallow Roasting Game to play with friends and family"
                            title="Marshmallow Game"
                            summary="Come challenge your friends and foes alike for a marshmallow like board game"
                            img={Marshmallow}
                            link="https://www.otoshigames.com/"
                            github="https://github.com/bkhoo123/Marsh-Vercel"
                        />
                    </div>

                </div>
            </Layout>
        </main>

    </>
  )
}
