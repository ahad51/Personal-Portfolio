/* eslint-disable react/prop-types */
import './projects.sass'
import data from './projects.json'

import { motion } from 'framer-motion'

const variants = {
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Project = () => {

  return (
    <div className="project">
      <motion.div className="wrapper" 
        initial='initial' 
        whileInView='animate'>
        <div className='heading-container'>
          <motion.h2 className='project-heading' variants={variants}>Selected Projects</motion.h2>

          <motion.div variants={variants} className='links-list'>
        
          </motion.div>
        </div>
        </motion.div>
      </div>
  )
}

export default Project