import React from 'react'
import './about.css'
import Person1 from '../../img/Person1.png'
import Person2 from '../../img/Person2.png'
import Person3 from '../../img/Person3.png'
import Person4 from '../../img/Person4.png'
import Person5 from '../../img/Person5.png'
import Person6 from '../../img/Person6.png'
import Kitchen from '../../img/kitchen.png'
import Single from '../../img/single.png'
import Rest from '../../img/guest-rest.png'
import Meeting from '../../img/guest-meeting.png'
import Corner from '../../img/meeting-corner.png'
import Front from '../../img/front.png'

const data = [
  {
    image: Person1,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person2,
    name: 'Kristin Watson',
    title: 'Graphic Designer',
  },
  {
    image: Person3,
    name: 'Ronald Richards',
    title: 'Networking Engineer',
  },
  {
    image: Person4,
    name: 'Guy Hawkins',
    title: 'Marketing Manager',
  },
  {
    image: Person5,
    name: 'Marvin McKinney',
    title: 'Software Engineer',
  },
  {
    image: Person6,
    name: 'Darlene Robertson',
    title: 'President of Sales',
  },
  {
    image: Person1,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person2,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person3,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person4,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person5,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
  {
    image: Person6,
    name: 'Darlene Robertson',
    title: 'Product Designer',
  },
]

const About = () => {
  return (
    <div>
      <div className='about_first_background'>
        <h3>Get to know more about us</h3>
        <h6>
          We are an agency engaged in the creative industry and business, we are
          ready to help you to improve your business performance together with
          our great team
        </h6>
      </div>
      <div className='team'>
        <div className='team_text'>
          <h6>Our Great Team</h6>
          <h3>Meet our professional team who will help you</h3>
        </div>
        <div className='team_blogs'>
          {data.map(({ image, name, title }) => {
            return (
              <div className='team_blog'>
                <img src={image} />
                <div className='team_blog_text'>
                  <h4>{name}</h4>
                  <h6>{title}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='moment'>
        <div className='moment_text'>
          <h6>Our Moment</h6>
          <h3>Our togetherness in working in the office</h3>
        </div>
        <div className='moment_rooms'>
          <div className='rooms_about'>
            <div className='room_1'>
              <img className='kitchen_room' src={Kitchen} />
              <p className='kitchen_text'>Kitchen room</p>
            </div>
            <div className='room_2'>
              <img src={Single} className='single_room' />
              <p className='single_text'>Single working space</p>
            </div>
            <div className='room_3'>
              <img src={Rest} className='rest_room' />
              <p className='rest_text'>Guest rest room</p>
            </div>
            <div className='room_4'>
              <img src={Meeting} className='meeting_room' />
              <p className='meeting_text'>Guest meeting room</p>
            </div>
            <div className='room_5'>
              <img src={Corner} className='corner_room' />
              <p className='corner_text'>Meeting corner</p>
            </div>
            <div className='room_6'>
              <img src={Front} className='front_room' />
              <p className='front_text'>Front working space</p>
            </div>
          </div>
          <div className='rooms_2_about'>
            <div className='room_1'>
              <img className='kitchen_room' src={Kitchen} />
              <p className='kitchen_text'>Kitchen room</p>
            </div>
            <div className='room_2'>
              <img src={Single} className='single_room' />
              <p className='single_text'>Single working space</p>
            </div>
            <div className='room_3'>
              <img src={Rest} className='rest_room' />
              <p className='rest_text'>Guest rest room</p>
            </div>
            <div className='room_4'>
              <img src={Meeting} className='meeting_room' />
              <p className='meeting_text'>Guest meeting room</p>
            </div>
            <div className='room_5'>
              <img src={Corner} className='corner_room' />
              <p className='corner_text'>Meeting corner</p>
            </div>
            <div className='room_6'>
              <img src={Front} className='front_room' />
              <p className='front_text'>Front working space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
