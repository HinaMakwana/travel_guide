import React, { useRef } from 'react'
import Latest from './latest'
import { Variants,motion, useInView } from 'framer-motion'
import { Pagewrapper } from './page-wrapper';

const cardSectionTitleVariants: Variants = {
	hidden: {
	  opacity: 0
	},
	show: {
	  opacity: 1,
	  transition: {
		duration: 0.4,
		delay: 0.2
	  }
	}
  };

function About() {
	const ref=useRef(null)
	const isInView=useInView(ref,{once:true})
  return (
	<div>
		<div className='flex flex-wrap justify-center gap-10 mb-20'>
			<div className='flex flex-row w-[90vw] 2xl:w-[30vw] md:w-[50vw] lg:w-[50vw] items-center p-10 h-20 box-border shadow-2xl shadow-cyan-700 rounded'
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				<svg viewBox="0 0 256 256" className='h-12 mr-5'><rect width="256" height="256" fill="none"/><line x1="56" y1="232" x2="200" y2="232" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><circle cx="128" cy="104" r="32" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/></svg>
				<p>Find inspiration and information for your next trip.</p>
			</div>
			<div className='flex flex-row w-[90vw] 2xl:w-[30vw] md:w-[50vw] lg:w-[50vw]  items-center p-10 h-20 box-border shadow-2xl shadow-cyan-700 rounded'
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				<svg fill="currentColor" viewBox="0 0 16 16" className='h-16 mr-5'><path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>
				<p>Book & travel securely with our money-back guarantee and local expert assistance.</p>
			</div>
		</div>
		<motion.div className='flex justify-center flex-col'
			variants={cardSectionTitleVariants}
			initial="hidden"
			whileInView="show"
		>
			<div className='text-center mb-5'>
				<h1 className='text-center text-4xl font-bold mb-5'>Top Travel Destinations</h1>
				<span className=''>Get inspiration and travel information for worldwide destinations.</span>
			</div>
			<div className=''>
				<Latest />
			</div>
		</motion.div>
	</div>
  )
}

export default About