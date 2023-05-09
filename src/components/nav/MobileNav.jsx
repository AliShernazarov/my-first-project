import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import './nav.css'
import NavLinks from './NavLinks'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <BiMenu
      className='hamburger'
      size='48px'
      color='#111029'
      cursor='pointer'
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <MdClose
      className='hamburger'
      size='48px'
      color='#111029'
      cursor='pointer'
      onClick={() => setOpen(!open)}
    />
  )

  return (
    <div className='mobile_navigation'>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </div>
  )
}
