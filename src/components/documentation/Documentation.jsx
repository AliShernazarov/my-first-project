import React from 'react'
import './documentation.css'
import Communication from '../../img/communication.png'
import Ellipse from '../../img/Ellipse.png'

const Documentation = () => {
  return (
    <div>
      <div className='documentation'>
        <div className='see'>
          <h6 className='document'>Our Documentation</h6>
          <h3 className='what'>
            See what our profile is like and how we work for your business
          </h3>
        </div>
        <div className='communication_image'>
          <div className='communication'>
            <img src={Communication} className='communication' />
            <div className='play_icon'>
              <svg
                width='21'
                height='27'
                viewBox='0 0 21 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.44479 0.905019C1.66158 0.787929 1.90419 0.729248 2.14717 0.729248C2.38949 0.729248 2.63204 0.787929 2.84977 0.905019L19.5954 12.2608C20.0293 12.4948 20.298 12.928 20.298 13.3963C20.298 13.8646 20.03 14.2977 19.5954 14.5314L2.84977 25.8877C2.41519 26.1214 1.87946 26.1214 1.44515 25.8877C1.0105 25.6532 0.742188 25.2199 0.742188 24.7519V2.0404C0.742188 1.57231 1.01005 1.1392 1.44479 0.905019Z'
                  fill='#4C40F7'
                />
              </svg>
            </div>
          </div>
          <img className='background_ellipse' src={Ellipse} />
        </div>
      </div>
    </div>
  )
}

export default Documentation
