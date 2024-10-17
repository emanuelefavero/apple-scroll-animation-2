'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Component() {
  return (
    <>
      <TextParallaxContent
        imgUrl='https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 1'
        heading='Heading 1'
      />
      <TextParallaxContent
        imgUrl='https://images.unsplash.com/photo-1620120966883-d977b57a96ec?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 2'
        heading='Heading 2'
      />
      <TextParallaxContent
        imgUrl='https://images.unsplash.com/photo-1690046793092-f8d634523264?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 3'
        heading='Heading 3'
      />
    </>
  )
}

// * Set padding for the image
const IMG_PADDING = 0

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
}: {
  imgUrl: string
  subheading: string
  heading: string
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      {/* // * Choose a height that is at least 100vh and adjust as needed */}
      <div className='relative h-[150vh]'>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  )
}

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        opacity,
        rotate,
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden'
    >
      {/* TIP: Uncomment this to also add opacity over the image */}
      {/* <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity,
        }}
      /> */}
    </motion.div>
  )
}

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string
  heading: string
}) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>
        {subheading}
      </p>
      <p className='text-center text-4xl font-bold md:text-7xl'>{heading}</p>
    </motion.div>
  )
}
