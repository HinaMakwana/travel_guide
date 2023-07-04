import { Text, Card} from "@nextui-org/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CardContainer } from "./motionCard";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function Destination() {
	const ref= useRef(null)
	const isInView = useInView(ref, {once: true})
	return (
		<CardContainer>
			<div className="flex flex-wrap justify-center">
				<div
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateX(-200px)",
						opacity: isInView ? 1 : 0,
						scale: isInView ? 1 : 0.5,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
				<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					scale: isInView ? 1 : 0.5,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}>
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
				</div>
			</div>
		</CardContainer>
  );
}
