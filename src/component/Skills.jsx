import React from 'react'
import HTML from '../assets/Html.svg'
import TAILWIND from '../assets/tailwind.png'
import  JAVASCRIPT from '../assets/js.svg'
import NODEJS from '../assets/Node.svg'
import MONGOOSE from '../assets/MongoDB.svg'
import GITHUB from '../assets/githubpic.svg'
import REACT from '../assets/react.svg'
import FRAME from '../assets/framer-motion.svg'
function Skills({darkmode}) {
  const skills=[
    {name:'HTML',icon:HTML,level:98,color:'from-orange-500 to-amber-500'},
    {name:'TAILWIND',icon:TAILWIND,level:90,color:'from-blue-500 to-cyan-500'},
    {name:'FRAMER MOTION',icon:FRAME,level:88,color:'from-red-500 to-orange-500'}, 
    {name:'JAVASCRIPT',icon:JAVASCRIPT,level:95,color:'from-yellow-500 to-amber-500'},
    {name:'REACT',icon:REACT,level:88,color:'from-red-500 to-orange-500'}, 
    {name:'NODEJS',icon:NODEJS,level:85,color:'from-cyan-500 to-blue-500'},
    {name:'MONGOOSE',icon:MONGOOSE,level:80,color:'from-teal-500 to-cyan-500'},
    {name:'GITHUB',icon:GITHUB,level:70,color:'from-blue-500 to-indigo-500'},
  ]
  return (
    <section 
    id='skills'
    style={{
      backgroundColor:darkmode ? '#111827' :'#f9fafb'
    }}
    className='py-14 relative overflow-hidden'>
      <div className='py-14 relative overflow-hidden'>
        <div className='container px-5 py-14 mx-auto'>
          <div className='text-center mb-20 ' data-aos='fade-up'>
            <h1
            className='sm:text-4xl text-3xl font-bold  title-font mb-4 '
            style={{
              color:darkmode ? 'white' : '#1f2937'
            }}>
              My <span style={{background:'linear-gradient(to right , #f59e0b)',
                WebkitBackgroundClip:'text',
                backgroundClip:'text',
                color:'transparent'
              }}>Skills</span>
            </h1>
            <p className='text-lg max-w-2xl mx-auto leading-relaxed'style={{
              color:darkmode ? '#d1d5db' : '#4b5563'
            }}>I am a MERN Stack Developer with hands-on experience in building responsive web applications using React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Bootstrap, and Git/GitHub.</p>
          </div>
          <div className='flex flex-wrap -m-4 '
          data-aos='fade-up'
          data-aos-delay='200'>
            {skills.map((skill,index)=>(
              <div className='p-4 lg:w-1/4 md:w-1/2 w-full '
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${300 + index * 100}`}>
                <div
                style={{background:darkmode
                  ?'linear-gradient(to bottom right,#1f2937, #111827)'
                  :'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                  borderColor: darkmode? '#374151' : '#e5e7eb'
                }}className='h-full p-6 rounded-2xl border hover:border-orange-500/50 
                transition-all duration-300 hover:translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]'
                >
                  <div className='flex items-center mb-6'>
                  <div
                  style={{background:darkmode
                  ?'linear-gradient(to bottom right,#374151, #1f2937)'
                  :'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                }} className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group:hover:scale-110
                transform duration-300'
                    >
                      <img src={skill.icon}
                      alt={skill.name}
                      className='w-full h-full object-contain'/>
                    </div>
                    <h3
                    className='text-xl font-bold ml-4 '
                    style={{
                      color:darkmode ? 'white' : '#1f2937'
                    }}>
                      {skill.name}
                    </h3>
                  </div>
                  <div className='mb-2 flex justify-between items-center '>
                    <span
                    className='font-medium'
                    style={{
                      color:darkmode ? '#d1d5db' : '#6b7280'
                    }}>
                      Proficiency
                    </span>
                    <span 
                    style={{background:'linear-gradient(to right ,#f97316,#f59e0b)',
                      WebkitBackgroundClip:'text',
                      backgroundClip:'text',
                      color:'transparent'
                    }} className='font-bold'
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className='w-full rounded-full h-3 overflow-hidden'
                  style={{
                    backgroundColor: darkmode ? '#374151' : '#e5e7eb'
                  }}>
                    <div className={`h-full rounded-full bg-linear-to-r
                      ${skill.color} transition-all duration-1000 ease-out`}
                      style={{width:`${skill.level}%`}}>
                    </div>
                  </div>
                  <div className={`mt-6 pt-4 border-t ${darkmode ? 'border-gray-700' : 'border-gray-300'}`}>
                      <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                      style={{background:'linear-gradient(to right ,#f97316, #f59e0b)'}}>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills