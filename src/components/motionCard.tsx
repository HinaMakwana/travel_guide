import { motion, AnimatePresence } from 'framer-motion';

export const MotionCard = ({ children }: any) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.4,
        type: 'spring',
        damping: 5,
        stiffness: 70
      }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export const CardContainer = ({ children }: any) => (
	<AnimatePresence>
	  <motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
		  delayChildren: 1,
		  staggerChildren:0.5
		}}
	  >
		{children}
	  </motion.div>
	</AnimatePresence>
  );
