import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useState } from 'react'
import MobileNav from './MobileNav'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <div>
      <nav>
        <div className='icon'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 19 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {' '}
            <path
              d='M18.3976 4.57048C17.2008 2.71944 15.426 1.31568 13.349 0.577472C11.2721 -0.160736 9.0094 -0.192027 6.91282 0.488464C4.81624 1.16895 3.00325 2.52309 1.75572 4.34034C0.508187 6.15758 -0.103965 8.33609 0.0144373 10.5372C0.13284 12.7382 0.975163 14.8385 2.41044 16.5114C3.84572 18.1843 5.79352 19.3362 7.951 19.7878C10.1085 20.2395 12.3547 19.9656 14.3405 19.0089C16.3263 18.0521 17.9403 16.4661 18.9316 14.4973L13.5727 11.7989C13.1761 12.5864 12.5305 13.2209 11.7362 13.6036C10.9419 13.9863 10.0434 14.0958 9.1804 13.9151C8.31741 13.7345 7.53829 13.2737 6.96418 12.6046C6.39007 11.9354 6.05314 11.0953 6.00577 10.2149C5.95841 9.33444 6.20327 8.46303 6.70229 7.73613C7.2013 7.00924 7.9265 6.46758 8.76513 6.19539C9.60376 5.92319 10.5088 5.93571 11.3396 6.23099C12.1704 6.52627 12.8803 7.08777 13.3591 7.82819L18.3976 4.57048Z'
              fill='white'
            />{' '}
          </svg>
        </div>
        <ul className='links'>
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

        <button className='us'>
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
        <MobileNav />
      </nav>
    </div>
  )
}

export default Nav
