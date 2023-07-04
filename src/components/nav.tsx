'use client';
import {motion} from 'framer-motion'
import { Button, Navbar } from 'flowbite-react';
import { Pagewrapper } from './page-wrapper';
import Link from 'next/link';

export default function NavbarWithCTAButton() {
  return (
	<>
		<motion.div id='nav032' className='w-[99vw] h-[70vh] flex flex-col'>
			<div>
				<Navbar
				fluid
				rounded
				className='bg-inherit'
				>
					<Navbar.Brand href="/" className='ml-10'>
						<img
						alt=""
						className="mr-3 h-11"
						src="/departures.svg"
						/>
						<span className="self-center text-sky-500 whitespace-nowrap text-xl font-semibold dark:text-white">
						Travel Guide
						</span>
					</Navbar.Brand>
					<div className="flex md:order-2">
						<Button className='bg-transparent w-[95px] border-2 hover:scale-110 transition delay-50 border-sky-600 hover:bg-blue-400 mr-2'>
							<Link href='/signup'>SignUp</Link>
						</Button>
						<Navbar.Toggle className='bg-transparent hover:bg-transparent'/>
					</div>
					<Navbar.Collapse>
						<Navbar.Link id='navlink' href="#home" className='text-white text-base hover:text-sky-500'>
							Home
						</Navbar.Link>
						<Navbar.Link id='navlink' href="#about" className='text-white text-base hover:text-sky-500'>
							Destinations
						</Navbar.Link>
						<Navbar.Link id='navlink' href="#services" className='text-white text-base hover:text-sky-500'>
							Services
						</Navbar.Link>
						<Navbar.Link id='navlink' href="#blogs" className='text-white text-base hover:text-sky-500'>
							<motion.div transition={{duration:0.5,type:'tween'}}>Blogs</motion.div>
						</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<Pagewrapper>
				<div className='flex flex-col items-center mt-32'>
					<span className='text-white text-6xl font-semibold mb-7 text-center'>Discover Story-worthy</span>
					<span className='text-white text-6xl font-semibold mb-10'>travel moments</span>
					<Button className='bg-transparent w-[140px] h-12 border-2 hover:scale-110 transition delay-50 font-semibold text-xl border-white hover:bg-blue-400'>
						<Link href='/start'>Get Started</Link>
					</Button>
				</div>
			</Pagewrapper>
		</motion.div>
	</>
  )
}
