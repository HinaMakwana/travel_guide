import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link, Navbar } from '@nextui-org/react'
import TravelQue from '@/components/stepper';

const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

const variants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
		  type: "spring",
		  stiffness: 20,
		  restDelta: 2
		}
	  }),
	  closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
		  delay: 0.5,
		  type: "tween",
		  stiffness: 400,
		  damping: 40
		}
	  }
  }

function Start() {
	const [isPressed,setIsPressed]=useState(false)
  return (
	<div className="">
		<div>
			<Navbar variant="sticky">
				<Navbar.Brand>
					<Navbar.Toggle isPressed='true' onClick={()=> {(isPressed==false)&&setIsPressed(true);(isPressed==true)&&setIsPressed(false);}} aria-label="toggle navigation" >
						{
							(isPressed == false) ?
							(<motion.svg
								initial={{opacity:0}}
								animate={{opacity:1}}
								transition={{duration:1}}
								id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.78" className='h-5 fill-blue-500 stroke-2'>
							<path d="M6.91,0H49.79a6.86,6.86,0,0,1,5.34,2.55A6.37,6.37,0,0,1,56.29,4.6a6.61,6.61,0,0,1,.41,2.31V49.6a7,7,0,0,1-2.13,5,7,7,0,0,1-4.78,1.94H6.91A6.73,6.73,0,0,1,4.37,56,6.78,6.78,0,0,1,.58,52.33,6.62,6.62,0,0,1,0,49.6V6.91A7,7,0,0,1,1.71,2.37L2,2.09A7.1,7.1,0,0,1,4.06.63,7,7,0,0,1,6.91,0ZM73.09,65.26H116a6.87,6.87,0,0,1,3,.67,7,7,0,0,1,2.38,1.88,6.77,6.77,0,0,1,1.16,2,6.66,6.66,0,0,1,.41,2.32v42.69a6.82,6.82,0,0,1-.56,2.69,7,7,0,0,1-1.57,2.28,6.83,6.83,0,0,1-2.22,1.43,6.72,6.72,0,0,1-2.56.51H73.09a7,7,0,0,1-2.55-.5,6.85,6.85,0,0,1-2.2-1.41,7.09,7.09,0,0,1-1.59-2.28,6.76,6.76,0,0,1-.57-2.72V72.18a6.67,6.67,0,0,1,.45-2.43,7,7,0,0,1,1.25-2.12l.28-.28a7,7,0,0,1,2.07-1.45,6.83,6.83,0,0,1,2.86-.64ZM116,72.15H73.09l0,0v42.72c3.68,0,42.89,0,42.93,0,0-3.6,0-42.7,0-42.72ZM6.91,65.26H49.79a6.86,6.86,0,0,1,5.34,2.55,6.37,6.37,0,0,1,1.16,2,6.66,6.66,0,0,1,.41,2.32v42.69a6.82,6.82,0,0,1-.56,2.69,6.69,6.69,0,0,1-1.57,2.28,7,7,0,0,1-4.78,1.94H6.91a6.92,6.92,0,0,1-2.54-.5,6.79,6.79,0,0,1-2.21-1.41,6.91,6.91,0,0,1-1.58-2.28A6.61,6.61,0,0,1,0,114.87V72.18a6.89,6.89,0,0,1,.45-2.43,7.05,7.05,0,0,1,1.26-2.12L2,67.35A6.89,6.89,0,0,1,4.06,65.9a6.82,6.82,0,0,1,2.85-.64Zm42.88,6.89H6.91l0,0,0,42.72c3.67,0,42.89,0,42.92,0,0-3.6,0-42.7,0-42.72ZM73.09,0H116a6.87,6.87,0,0,1,3,.67,7,7,0,0,1,2.38,1.88,6.77,6.77,0,0,1,1.16,2.05,6.61,6.61,0,0,1,.41,2.31V49.6a6.83,6.83,0,0,1-.56,2.7,7.09,7.09,0,0,1-1.57,2.28A7,7,0,0,1,118.53,56a6.91,6.91,0,0,1-2.56.51H73.09A6.78,6.78,0,0,1,70.54,56a7,7,0,0,1-2.2-1.4,7.09,7.09,0,0,1-1.59-2.28,6.78,6.78,0,0,1-.57-2.73V6.91a6.66,6.66,0,0,1,.45-2.42,6.91,6.91,0,0,1,1.25-2.12l.28-.28A7.19,7.19,0,0,1,70.23.63,7,7,0,0,1,73.09,0ZM116,6.89H73.09l0,0V49.63c3.68,0,42.89,0,42.93,0,0-3.6,0-42.71,0-42.72Zm-66.18,0H6.91l0,0,0,42.72c3.67,0,42.89,0,42.92,0,0-3.6,0-42.71,0-42.72Z"/>
							</motion.svg>
							)
							:
							(
							<motion.svg
							initial={{opacity:0,rotate:180}}
							animate={{opacity:1,rotate:360,transition:{type:'tween',ease:'circInOut',duration:1}}}
								version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" className='h-6 fill-blue-600 stroke-2' ><g><path fill-rule="evenodd" clip-rule="evenodd" d="M13.002,0h96.878c7.15,0,13.002,5.851,13.002,13.002v96.877 c0,7.151-5.852,13.002-13.002,13.002H13.002C5.851,122.882,0,117.031,0,109.88V13.002C0,5.851,5.851,0,13.002,0L13.002,0z"/></g></motion.svg>
							)
						}
					</Navbar.Toggle>
				</Navbar.Brand>
					<Navbar.Collapse className='-mt-4'>
						<motion.div
						 initial={{opacity:0}}
						 animate={{opacity:1,transition:{type:'tween',ease:'circInOut',duration:1}}}
						>
							{collapseItems.map((item, index) => (
							<Navbar.CollapseItem key={item} css={{backgroundColor:'$primaryLightHover',paddingLeft:'$10',width:'25vh'}}>
								<Link
									color="inherit"
									css={{
										minWidth: "100%",
									}}
									href="#"
								>
									{item}
								</Link>
							</Navbar.CollapseItem>
							))}
						</motion.div>
					</Navbar.Collapse>
      		</Navbar>
		</div>
		<div className=''>
			<div className=''>
				<TravelQue />
			</div>
		</div>
	</div>
  )
}

export default Start