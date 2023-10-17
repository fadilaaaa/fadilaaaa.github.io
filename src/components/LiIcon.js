import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function LiIcon({reference}) {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    
    <figure className='absolute left-0 stroke-dark'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:h-[40px] xs:w-[40px]' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20"  className="stroke-primary stroke-1 fill-none"  />
            <motion.circle cx="75" cy="50" r="20" className=" stroke-[5px] fill-light"
            style={{
                pathLength: scrollYProgress
            }}
            />
            <circle cx="75" cy="50" r="10" className=" animate-pulse stroke-1 fill-primary" />
        </svg>
    </figure>
  )
}