import { useState, useEffect, useContext } from 'react';
import Pulse from './components/pulse/Pulse';
import SplashScreen from './components/Splash/SplashScreen';
import NavBar from './components/navBar/NavBar';
import Hero from './components/hero/Hero';
import Project from './components/projects/Projects';
import ProjectList from './components/projects/ProjectList';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { ThemeContext } from './context/ThemeContext';
import './styles/app.sass'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    
      if (isLoading) {
        return <SplashScreen />;
      }
  return (
    <div className={isDarkMode ? 'dark' : null}>
      <Pulse/>
      <section id='home' className='background-dark text-dark'>
        <NavBar/>
        <Hero/>
      </section>
      <section id='about' className='background-dark text-dark'>
        <About/>
      </section>
      <section id='projects' className='background-dark text-dark'>
        <Project/>
      </section>
      
        <ProjectList/>

      <section id='contact' className='background-dark text-dark'>
        <Contact/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
