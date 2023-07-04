import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button
  } from "@material-tailwind/react";
import { useInView,motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { root } from "postcss";
import { useRef } from "react";

  export default function Blog() {
	const ref = useRef(null)
	const isInView = useInView(ref, {once : true})
	return (
		<div>
			<div>
				<h1 className='text-center text-4xl font-bold mb-10'>Exclusive Collection Of Travel Blogs</h1>
			</div>
			<div className="flex flex-wrap justify-center gap-10">
				<div
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateX(-200px)",
						opacity: isInView ? 1 : 0.2,
						scale: isInView ? 1 : 0.5,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<Card className="mt-6 w-96 h-96">
						<CardHeader color="blue-gray" className="relative h-56">
						<img src="best.jpeg" alt="img-blur-shadow" className="" />
						</CardHeader>
						<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							<Link href=''>10 Best Places To Must Visit In India </Link>
						</Typography>
						</CardBody>
						<CardFooter className="pt-0">
						<Button className="text-black bg-blue-200">Read More</Button>
						</CardFooter>
					</Card>
				</div>
				<div
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateY(100px)",
						opacity: isInView ? 1 : 0.2,
						scale: isInView ? 1 : 0.5,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<Card className="mt-6 w-96 h-96">
						<CardHeader color="blue-gray" className="relative h-56">
						<img src="best.jpeg" alt="img-blur-shadow"  />
						</CardHeader>
						<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							<Link href=''>Top 10 Best Places To Visit In Gujarat</Link>
						</Typography>
						</CardBody>
						<CardFooter className="pt-0">
						<Button className="text-black bg-blue-200">Read More</Button>
						</CardFooter>
					</Card>
				</div>
				<div
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0.2,
						scale: isInView ? 1 : 0.5,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<Card className="mt-6 w-96 h-96">
						<CardHeader color="blue-gray" className="relative h-56">
						<img src="best.jpeg" alt="img-blur-shadow"  />
						</CardHeader>
						<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							<Link href=''>35 Best Places To Visit In India In June</Link>
						</Typography>
						</CardBody>
						<CardFooter className="pt-0">
						<Button className="text-black bg-blue-200">Read More</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
  }
