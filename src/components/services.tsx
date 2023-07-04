import { motion } from 'framer-motion'
import React from 'react'

const item = {
	hidden: { opacity: 0},
	show: {
	  opacity: 1,
	  transition: {
		duration: 0.5,
		type: "spring",
		damping: 5,
		stiffness: 70,
		ease:'easeInOut'
	  }
	}
}

const container = {
	hidden: { opacity: 0 },
	show: {
	  opacity: 1,
	  transition: {
		delayChildren: 0.4,
		staggerChildren:0.4,
	  }
	}
  }

function Services() {
  return (
	<div>
		<div>
			<h1 className='text-center text-4xl font-bold mb-10'>Our Services</h1>
			<motion.div className='flex flex-wrap justify-center gap-28'
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{once:true}}
			>
				<motion.div className='h-60 w-80 rounded box-border shadow-2xl shadow-cyan-700 hover:scale-110'
					variants={item}
				>
					<img src='trip.svg' alt='jfh' className='h-10 mx-auto mt-10' />
					<p className='text-center my-3 text-lg font-bold'>Plan Trip</p>
					<p className='text-center'>We can design a complete itinerary for you including suggestions of our favourite places and things to see.</p>
				</motion.div>
				<motion.div className='h-60 w-80 rounded box-border shadow-2xl shadow-cyan-700 hover:scale-110'
					variants={item}
				>
					<img src='restaurant.svg' alt='kfj' className='h-12 mx-auto mt-10' />
					<p className='text-center my-3 text-lg font-bold'>Guide Your Trip</p>
					<p className='text-center'>We can guide to you during your trip and give you tips for good places for trip.</p>
				</motion.div>
				<motion.div className='h-60 w-80 rounded box-border shadow-2xl shadow-cyan-700 hover:scale-110'
					variants={item}
				>
					<img src='guide.svg' alt='kfj' className='h-9 mx-auto mt-10' />
					<p className='text-center my-3 text-lg font-bold'>Find Nearest Restaurant</p>
					<p className='text-center'>Yes of course we can arrange for you hotel reservations and give you tips for good restaurants in all the cities that we serve.</p>
				</motion.div>
			</motion.div>
		</div>
	</div>
  )
}

export default Services