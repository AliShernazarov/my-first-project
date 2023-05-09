import React from 'react'
import './workSpace.css'
import Kitchen from '../../img/kitchen.png'
import Single from '../../img/single.png'
import Rest from '../../img/guest-rest.png'
import Meeting from '../../img/guest-meeting.png'
import Corner from '../../img/meeting-corner.png'
import Front from '../../img/front.png'

const WorkSpace = ({ top }) => {
  return (
    <div style={{ top: top }} className='workingspace'>
      <div className='decoration'>
        <h6 className='w'>Working space</h6>
        <h3 className='interior'>Let's meet our interior room decoration</h3>
      </div>
      <div className='rooms'>
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
  )
}

export default WorkSpace
