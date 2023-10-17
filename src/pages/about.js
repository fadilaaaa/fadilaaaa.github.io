import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Profile from "../../public/images/profile/profile2.png";
import Image from "next/image";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>Fadila | About Page</title>
        <meta name="description" content="any description you want" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hello, I'm Fadila, a versatile full-stack web and app developer
                with a passion for crafting stunning web applications, intuitive
                user interfaces, and the power of machine learning. My drive for
                innovation keeps me constantly seeking new ways to turn my
                clients' visions into reality. I firmly believe that software,
                particularly machine learning, holds the potential to address
                and efficiently solve our clients' challenges by creating
                intuitive and delightful user experiences.
              </p>
              <p className="font-medium my-4">
                For me, design goes beyond aesthetics; it's about streamlining
                the user experience and making it as seamless as possible. I'm
                dedicated to harnessing the power of software, including the
                capabilities of machine learning, to maximize efficiency and
                bridge the gap between technology and its users. Whether I'm
                developing a website, mobile app, or any other digital product,
                I bring my unwavering commitment to design excellence,
                user-centric thinking, and the potential of machine learning to
                every project I undertake.
              </p>

              <p className="font-medium">
                I'm eagerly anticipating the opportunity to apply my skills and
                enthusiasm, including machine learning, to your next venture.
                Together, we can create exceptional digital experiences that
                push the boundaries of what technology can achieve
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={Profile}
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Profile Picture"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Technologies Learned
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </>
  );
}
