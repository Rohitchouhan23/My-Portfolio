import { motion } from 'framer-motion'
import React from 'react'
import {FaExternalLinkAlt ,FaGithub} from 'react-icons/fa'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/Project3.png'

function Project({darkmode}) {
  const projects=[
    {
      id:1,
      title:'CarBazar',
      desc:'Online platform to buy and sell',
      image:Project1,
      tags:['MERN'],
      github: 'https://github.com/Rohitchouhan23/E-Commerce-Application.git',
      demo: 'https://e-commerce-application-carbazar.vercel.app/'
    },
    {
      id:2,
      title:'Library Management System',
      desc:'Software application used to manage books',
      image:Project2,
      tags:['React','Node Js',],
      github: 'https://github.com/Rohitchouhan23/Book-Inventory-System.git',
      demo: 'https://book-inventory-system-six.vercel.app'
    },
        {
      id:3,
      title:'Nextalk',
      desc:'Real-time chat application',
      image:Project3,
      tags:['MERN','Socket.io.',],
      github: 'https://github.com/Rohitchouhan23/Chat-Application.git',
      demo: 'https://chat-application-nextalk.vercel.app/'
    }
  ]
  return (
    <section
    id='projects'
    style={{
      backgroundColor:darkmode ? '#111827' :'#f9fafb'
    }} className='relative py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10 ' data-aos='fade-up' >
          <h2 className='text-3xl sm:text-4xl font-bold mb-3'
          style={{
          color:darkmode ? 'white' : '#1f2937'
        }}>
             My <span style={{background:'linear-gradient(to right,#f97316,#f59e0b)',
              WebkitBackgroundClip:'text',
              backgroundClip:'transparent',
              color:'transparent'
             }}>Projects</span>
          </h2>
          <p className='max-w-xl mx-auto'
          style={{color:darkmode ? '#d1d5db' : '#6b7280'}}>
            A ShowCase Of My Recent Work
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
             {projects.map((project,index)=>(
              <div 
              key={project.id}
              style={{
                background: darkmode ? 'linear-gradient(to right,#1f2937,#111827)' : 'linear-gradient(to right,#ffffff,#f9fafb)',
                borderColor: darkmode ? '#374151' :'#e5e7eb'
              }} className='group rounded-xl border hover:border-orange-500/50 duration-300  transition-all'
              data-aos='fade-up' data-aos-delay={index * 100}>
                <div className='h-36 overflow-hidden rounded-t-xl'>
                  <img src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110
                  transition-transform duration-500'/>
                </div>
                <div className='p-4'>
                  <h3
                  className='text-lg font-bold mb-2' style={{ color: darkmode ? 'white' : '#1f2937'}}>
                    {project.title}
                  </h3>
                  <p className='text-sm mb-3' style={{color:darkmode ? '#d1d5db' : '#6b7280'}}>
                  {project.desc}
                  </p>
                  <div className='flex flex-wrap gap-1.5 mb-4'>
                    {project.tags.map((tag,idx)=>(
                      <span
                      key={idx}
                      style={{
                        backgroundColor:darkmode ? '#374151' : '#f3f4f6',
                        color:darkmode ? '#d1d5db' : '#4b5563'
                      }} className='px-2 py-1 text-xs rounded-full '>
                          {tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-2'>
                    <a
                    href={project.github}
                    rel="noopener noreferrer"
                    style={{backgroundColor:darkmode ? '#374151' : '#f3f4f6',
                      color:darkmode ? 'white' : '#374151'
                    }}
                    className='flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-color'
                    data-aos='zoom-in'
                    data-aos-delay='300'>
                      <FaGithub className='text-sm'/>
                      <span>Code</span>
                    </a>
                    {/* demo */}
                    <a
                    href={project.demo}
                    rel="noopener noreferrer"
                    style={{background:'linear-gradient(to right,#f97316,#f59e0b)',
                      
                    }}
                    className='flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm text-white  rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='400'>
                      <FaExternalLinkAlt className='text-sm'/>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
             ))}
        </div>
        <div className='text-center mt-10'>
                    <a
                    href='https://github.com/Rohitchouhan23'
                    style={{background:'linear-gradient(to right,#f97316,#f59e0b)',
                      
                    }}
                    className='inline-flex items-center font-semibold
                    gap-2 px-7 py-4 text-sm text-white  rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='400'>
                      <FaGithub />
                      <span>View All Projects</span>
                      <FaExternalLinkAlt className='text-sm'/>
                    </a>
        </div>
      </div>
    </section>
  )
}

export default Project