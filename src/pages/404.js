import React from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import AnimatedText from "@/components/AnimatedText"
import TransitionEffect from "@/components/TransitionEffect"
import Link from 'next/link'

export default function FourOhFour() {
    return (
      <>
          <Head>
              <title>Fadila | About Page</title>
              <meta name="description" content="any description you want" />
          </Head>
  
          <TransitionEffect />
          <main className="flex w-full flex-col items-center justify-center ">
              <Layout className="pt-16">
                
              <AnimatedText text="under maintenance, 404" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
              <Link href="/">
        Go back home
    </Link>
</Layout> 
</main>             
    </>
    )
    }