import React from 'react'
import './speeches.css'
import Exclude from '../../img/Exclude.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
  {
    title: Exclude,
    name: 'Mark Garfield',
    company: 'CEO & Head of Product',
    review:
      'We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.',
  },
  {
    title: Exclude,
    name: 'Mark Garfield',
    company: 'CEO & Head of Product',
    review:
      'We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.',
  },
  {
    title: Exclude,
    name: 'Mark Garfield',
    company: 'CEO & Head of Product',
    review:
      'We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.',
  },
  {
    title: Exclude,
    name: 'Mark Garfield',
    company: 'CEO & Head of Product',
    review:
      'We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.',
  },
]

const Speeches = () => {
  return (
    <div className='speeches'>
      <Swiper
        className='speech'
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ title, name, company, review }, index) => {
          return (
            <SwiperSlide key={index} className='speech_text'>
              <img src={title} className='exclude' />
              <p className='speech_text_about'>{review}</p>
              <div className='famous'>
                <h6 className='famous_person'>{name}</h6>
                <h6 className='famous_company'>{company}</h6>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Speeches
