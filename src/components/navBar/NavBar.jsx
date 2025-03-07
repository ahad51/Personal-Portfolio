import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import Social from '../social/Social';
import './navbar.sass'

const NavBar = () => {
  return (
      <div className='navbar'>
        <div className="wrapper">
        <Sidebar/>
          <motion.div
            initial={{ opacity:0, translateX: '-12px'}}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 1.5 }}
          >
          </motion.div>
          <motion.div 
            className="social"
            initial={{ oapcity:0, translateX: '12px'}}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 1.5 }}
          >
            <Social/>
          </motion.div>
        </div>
      </div>
  )
}

export default NavBar