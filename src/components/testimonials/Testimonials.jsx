import React from 'react'
import './testimonials.css'
import Avatar1 from '../../img/Avatar1.png'
import Avatar2 from '../../img/Avatar2.png'
import Avatar3 from '../../img/Avatar3.png'
import Avatar4 from '../../img/Avatar4.png'
import Avatar5 from '../../img/Avatar5.png'
import Avatar6 from '../../img/Avatar6.png'
import Stars from '../../img/Stars.png'

const data = [
  {
    avatar: Avatar1,
    name: 'Ronald Richards',
    company: 'Google inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
  {
    avatar: Avatar2,
    name: 'Guy Hawkins',
    company: 'Paypal inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
  {
    avatar: Avatar3,
    name: 'Kristin Watson',
    company: 'Microsoft inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
  {
    avatar: Avatar4,
    name: 'Robert Fox ',
    company: 'Facebook inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
  {
    avatar: Avatar5,
    name: 'Savannah Nguyen',
    company: 'Google inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
  {
    avatar: Avatar6,
    name: 'Courtney Henry',
    company: 'Apple inc.',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    stars: Stars,
  },
]

const Testimonials = ({ top }) => {
  return (
    <div style={{ top: top }} className='background'>
      <div className='testimonials'>
        <div className='head_testimonials'>
          <h6 className='testimonials_head'>Testimonials</h6>
          <h3 className='testimonials_customers'>
            Some testimonials from our customers
          </h3>
        </div>
        <div className='testimonials_row'>
          {data.map(({ avatar, name, company, review, stars }) => {
            return (
              <div className='testimonial_blog'>
                <img src={avatar} className='testimonial_avatar' />
                <div className='testimonial_person_box'>
                  <h3 className='testimonial_person_name'>{name}</h3>
                  <p className='testimonial_companies'>{company}</p>
                </div>
                <p className='testimonial_text'>{review}</p>
                <img src={stars} className='stars' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
