import React from 'react'
import './home.css'
import Image from '../../img/home_image.png'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <div>
          <div className='text1'>
            Make your business <br />
            <span className='more'>more powerful </span>
            <br />
            with us
          </div>
          <div className='text2'>
            <div className='text'>
              <p>
                We provide various services to make
                <br />
                your business grow and get bigger. Your <br />
                satisfaction is our first priority.
              </p>
            </div>
            <div>
              <button className='get'>
                <p className='started'>
                  Get Started
                  <svg
                    width='23'
                    height='16'
                    viewBox='0 0 23 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.5 8H21.5'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M14.5 1L21.5 8L14.5 15'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </div>
        <img className='home_image' src={Image} alt='' />
      </div>
    </div>
  )
}

export default Home
