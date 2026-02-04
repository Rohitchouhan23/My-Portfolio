import React, { useState } from 'react'
import { motion, scale,AnimatePresence } from "framer-motion";
import SunIcon from './Sun';
import MoonIcon from './Moon';
import Menu from './Menu';
import X from './X';
function Navbar({darkmode,toggleDarkMode}) {
    const [activeSection,setActiveSection]=useState('home');
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    


    const navitems=[
        {name:'Home',link:'#home'},
        {name:'About',link:'#about'},
        {name:'Skills',link:'#skills'},
        {name:'Projects',link:'#projects'},
        {name:'Contact',link:'#contact'},  
    ];

    const lightColors={
      navBg:'bg-gradient-to-br from-orange-200 to-white',
      textPrimary:'text-gray-900',
      textSecondary:'text-gray-800',
      textHover:'text-orange-500',
      textActive:'text-orange-600',
      indicate:'from-orange-500 to-amber-500',
      button:'from-orange-500 to-amber-500'
    }

    
    const darkColors={
      navBg:'bg-gradient-to-br from-gray-700 to-black',
      textPrimary:'text-white',
      textSecondary:'text-gray-300',
      textHover:'text-orange-400',
      textActive:'text-orange-400',
      indicate:'from-orange-500 to-amber-500',
      button:'from-orange-500 to-amber-500'
    }

    const colors=darkmode ? darkColors : lightColors;

    const handleNavClick=(itemName)=>{
      setActiveSection(itemName.toLowerCase());
      setIsMenuOpen(false);
    };
  return (
    <div className='flex justify-center w-full fixed z-50 mt-4'>
      <motion.nav
      initial={{y:-100}}
      animate={{y:0}}
      transition={{duration:0.5}}
      className={`flex item-center justify-center ${colors.navBg}
      backdrop-blur-lg rounded-2xl px-4 lg:px-10 py-2 shadow-lg`}
      >
        <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
          {/* logo */}
          <motion.a href="/"
          whiteHover={{scale:1.05}}
          className='flex items-center space-x-2'>
            <span
            className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className='text-orange-500'>.</span>
            </span>
          </motion.a>
          {/* {Naveitem} */}
          <div className='hidden lg:flex items-center space-x-6'>
            {navitems.map((item)=>(
              <a
              href={item.link}
              key={item.link}
              onClick={()=>handleNavClick(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseEnter={() => setHoveredItem(item.name.toLowerCase())}
              className='relative'
              >
                <motion.span
                className={`font-medium transition-color duration-300
                ${activeSection === item.name.toLocaleLowerCase()
                  ?colors.textActive
                  :`${colors.textSecondary} hover:text-orange-500`
                }
                  whileHover={{scale:1.05}}
                  whileTap={{scale:0.95}}
                `}>
 
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLocaleLowerCase() && (
                  <motion.div
                  layoutId='navbar-indicator'
                  className={`absolute -bottom-1 left-0
                    right-0 h-0.5 bg-linear-to-r rounded-full
                    ${colors.indicate}
                    `}>
                  </motion.div>
                )}
              </a>
            ))}
          </div>
          <div className='flex items-center space-x-2'>
            {/* {Dark mood toogle} */}
            <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkmode
              ?'bg-gray-700'
              :'bg-gray-200'
            } transition-colors`}
            aria-label={darkmode 
              ? 'switch to light mode'
              :'switch to dark mode'
            }>
              {darkmode ? (
                <SunIcon className='w-5 h-5 text-yellow-300'/>
              ) : (<MoonIcon className='w-5 h-5 text-gray-700'/>)
            }
            </motion.button>
            {/* Button */}
            <motion.a
            href='#contact'
            whileHover={{scale:1.10}}
            whileTap={{scale:0.95}}
            className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
              Hire Me
            </motion.a>
          </div>
          {/* Mobile Menu Button */}
            <div className='flex lg:hidden items-center space-x-4 px-2 '> 
              <motion.button
              whileTap={{scale:0.9}}
              onClick={()=>setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkmode
                ?'bg-gray-700'
                :'bg-gray-200'
              }`} >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${darkmode
                    ?'text-white'
                    :'text-gray-700'
                  }`}/>
                ): (
                  <Menu className={`w-5 h-5 ${darkmode
                    ?'text-white'
                    :'text-gray-700'
                  }`}/>
                )
              }
              </motion.button>
            </div>
        </div>
        {isMenuOpen && (
          <motion.div
          initial={{opacity:0,height:0}}
          animate={{opacity:1,height:'auto'}}
          exit={{opacity:0,height:0}}
          transition={{duration:0.3}}
          className={`absolute top-full left-0 right-0 mt-2 lg:hidden
            ${darkmode
              ?'bg-gray-900/95'
              : 'bg-white/95'
            } backdrop-blur-lg rounded-xl shadow-lg ${
              darkmode ? 'border-gray-700' : 'border-gray-700'
            }
            `}>
              <div className='px-4 py-3 space-y-2 border-none'>
                {navitems.map((items)=>(
                  <a key={items.name}
                  href={items.link}
                  onClick={()=>handleNavClick(items.name)}
                  className='block'>
                    <motion.div
                    whileHover={{x:5}}
                    className={`py-3 px-4 rounded-lg text-center
                      ${
                        activeSection === items.name.toLowerCase()
                        ? darkmode ? 'bg-gray-800' : 'bg-orange-50'
                        :""
                      }`
                    }>
                      <span 
                      className={`font-medium ${
                        activeSection === items.name.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                      }`}>
                        {items.name}
                      </span>
                    </motion.div>
                  </a>
                ))}
                <motion.a
                href='#contact'
                onClick={()=>setIsMenuOpen(false)}
                whileTap={{scale:0.95}}
                className={`block py-3 px-4 text-center font-semibold
                  rounded-lg bg-linear-to-r ${colors.button}
                  text-white shadow-md
                  `}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
        )
        }
      </motion.nav>
    </div>
  )
}

export default Navbar