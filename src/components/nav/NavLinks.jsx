import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useState, useRouter } from 'react'
import { useEffect } from 'react'
import useWindowOnTop from 'react'
import { useMediaQuery } from '@mui/material'

export default function NavLinks() {
  // const { push, route } = useRouter()
  // const top = useWindowOnTop()
  // const mobile = useMediaQuery((theme) => theme.breakpoints.down('desktop'))
  // const [category, setCategory] = useState({ active: false, data: {} })
  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   const html = document.querySelector(':root').style
  //   const body = document.body.style

  //   if (category.active) {
  //     html.height = category.active ? null : '100%'
  //     html.width = category.active ? null : '100%'
  //     html.overflow = category.active ? null : 'hidden'
  //     body.height = '100%'
  //     body.width = '100%'
  //     body.overflow = 'hidden'
  //   } else {
  //     html.height = null
  //     html.width = null
  //     html.overflow = null
  //     body.height = null
  //     body.width = null
  //     body.overflow = null
  //   }
  // }, [category.active])

  const [activeNav, setActiveNav] = useState('/')
  return (
    <div className='links_button_box'>
      <ul className='links_button'>
        <h6>
          <li>
            <Link
              to='/'
              onClick={() => setActiveNav('/')}
              className={activeNav === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/works'
              onClick={() => setActiveNav('/works')}
              className={activeNav === '/works' ? 'active' : ''}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              onClick={() => setActiveNav('/about')}
              className={activeNav === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
        </h6>
      </ul>

      <button className='button_us'>
        <p>
          <Link
            to='/contact'
            onClick={() => setActiveNav('/contact')}
            className={activeNav === '/contact' ? 'active' : ''}
          >
            Contact us
          </Link>
        </p>
      </button>
    </div>
  )
}
