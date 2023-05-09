import React from 'react'
import './project.css'

const Project = ({ top }) => {
  return (
    <div style={{ top: top }} className='project'>
      <div className='project_text'>
        <p className='project_ready'>Are You Ready For</p>
        <h3 className='project_start'>Start a New Project</h3>
      </div>
      <div className='project_button'>
        <div className='project_button_text'>
          <p>Start Now</p>
          <svg
            width='20'
            height='14'
            viewBox='0 0 23 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.5 8.83008H21.5'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M14.5 1.83008L21.5 8.83008L14.5 15.8301'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Project
