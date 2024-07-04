import {motion} from "framer-motion";

export const RouteAnimation = ({children}) => {

  const animationVariants = {
    "initial": {opacity: 0, scale: 0.85, y:100},
    "animateTo": {opacity: 1, scale: 1, y: 0},
  }
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animateTo"
      transition={{duration: 0.2, ease: 'easeIn'}}
    >
      {children}
    </motion.div>
  )
}
