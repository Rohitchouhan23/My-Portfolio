import React from 'react'
import { useState,useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(()=>{
    AOS.refresh()
  },[darkmode])

  const toggleDarkMode = () => {
    const newMode = !darkmode;
    setDarkmode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      className={
        darkmode
          ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
          : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
      }
    >
      <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
      <Hero darkmode={darkmode}/>
      <About darkmode={darkmode}/>
      <Skills darkmode={darkmode}/>
      <Project darkmode={darkmode}/>
      <Contact darkmode={darkmode}/>
      <Footer darkmode={darkmode}/>
    </div>
  );
}


export default App

