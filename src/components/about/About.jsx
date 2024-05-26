import { motion } from 'framer-motion'
import './about.sass'

const variant = {
  initial: {
    x: 10,
    opacity: 0.6,
  },

  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 2,
      staggerChildren: 0.1
    }
  }
}

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div 
          initial='initial' 
          whileInView='animate'
          variants={variant} 
          className="info"
        >
          <ul>
            <li><p>HTML/CSS</p></li>
            <li><p>JavaScript / TypeScript</p></li>
            <li><p>React</p></li>
            <li><p>Node</p></li>
            <li><p>Express</p></li>
            <li><p>Mongo Db</p></li>
            <li><p>Python</p></li>
            <li><p>Django</p></li>
            <li><p>Redux</p></li>
            <li><p>Bootstrap</p></li>
            <li><p>Tailwind CSS</p></li>
            <li><p>SASS</p></li>
            <li><p>Git / Github</p></li>
            <li><p>Jest / Vitest / React Testing Library</p></li>
            <li><p>Material-UI / Ant-Design / Chakra</p></li>
          </ul>
          <a href="Abdul Ahad.pdf" target="_blank" rel="noopener noreferrer" download="" className='resume-link'>
            <button className='get-resume' type="button">
							Get my CV
						</button>
          </a>
        </motion.div>
        <div className="details">
          <h2>ABOUT</h2>
          <div className="text">
          <p>
          Hello there, My name is Abdul Ahad and I am a full stack developer from Pakistan, specializing in creating dynamic and user-friendly web applications. Proficient in both front-end and back-end technologies, I build efficient, responsive websites tailored to client needs. I am committed to continuous learning and staying updated with industry trends to deliver top-notch digital experiences.</p>

          <p> While I have a broad skill set, my strongest expertise lies in the MERN stack. This powerful technology stack includes MongoDB,Reactjs,Nodejs,Expressjs. With these technologies, I create efficient, responsive web applications that are tailored to meet client needs and deliver top-notch digital experiences.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About