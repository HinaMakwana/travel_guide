import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import { Text, Card} from "@nextui-org/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

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

const item = {
	hidden: { opacity: 0, scale:0.5 },
	show: {
	  opacity: 1,
	  scale:1,
	  transition: {
		duration: 1,
		type: "tween",
		damping: 5,
		stiffness: 70,
	  }
	}
}

function Latest() {
  return (
	<motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
	  viewport={{once:true}}
	  className='flex flex-wrap justify-center'
    >
      <motion.div variants={item}>
		<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
		>
			<Card.Body className="bg-[url('../../public/delhi.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className=" text-2xl font-bold text-center" css={{color:'white'}}>Delhi</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
      <motion.div variants={item}>
		<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
			>
			<Card.Body className="bg-[url('../../public/Cherrapunji.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Cherrapunji</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
		isPressable
		isHoverable
		variant="bordered"
		css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
		>
		<Card.Body className="bg-[url('../../public/Amer-Fort.jpg')] bg-cover bg-center" >
			<div className="m-auto">
				<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Rajasthan</Text>
				<Link className="flex items-center gap-2 justify-center text-white" href=''>
					Learn More
					<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
				</Link>
			</div>
		</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  <Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5', '&:hover': {scale:1.1} }}
			>
			<Card.Body className="bg-[url('../../public/jal-mahal-jaipur.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'$background'}}>Jaipur</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5', '&:hover': {scale:1.1} }}
		>
			<Card.Body className="bg-[url('../../public/kashmir.jpeg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Kashmir</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
		isPressable
		isHoverable
		variant="bordered"
		css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
		>
		<Card.Body className="bg-[url('../../public/TajMahal.jpeg')] bg-cover bg-center" >
			<div className="m-auto">
				<Text className="text-center text-2xl font-bold" css={{color:'white'}}>TajMahal</Text>
				<Link className="flex items-center gap-2 text-white justify-center" href=''>
					Learn More
					<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
				</Link>
			</div>
		</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
			>
			<Card.Body className="bg-[url('../../public/Ooty.jpeg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Ooty</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
			>
			<Card.Body className="bg-[url('../../public/Varanasi1.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Varanasi</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1}}}
			>
			<Card.Body className="bg-[url('../../public/sikkim.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Sikkim</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
	  <motion.div variants={item}>
	  	<Card
			isPressable
			isHoverable
			variant="bordered"
			css={{ mw: "400px", height:'200px', width:'300px', margin:'$5','&:hover': {scale:1.1} }}
			>
			<Card.Body className="bg-[url('../../public/Shimla.jpg')] bg-cover bg-center" >
				<div className="m-auto">
					<Text className="text-center text-2xl font-bold" css={{color:'white'}}>Shimla</Text>
					<Link className="flex items-center gap-2 text-white justify-center" href=''>
						Learn More
						<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
					</Link>
				</div>
			</Card.Body>
		</Card>
	  </motion.div>
    </motion.div>
  )
}

export default Latest