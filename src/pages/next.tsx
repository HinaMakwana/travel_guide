import {motion} from 'framer-motion'
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren:0.7,
      staggerDirection: 1
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
export default function Next() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.li variants={item}>ass</motion.li>
      <motion.li variants={item}>ssd</motion.li>
    </motion.ul>
  )
}