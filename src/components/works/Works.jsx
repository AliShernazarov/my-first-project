import React from 'react'
import './works.css'
import Statistics from '../../img/Statistics.png'
import Amazon from '../../img/Amazon.png'
import Jeep from '../../img/Jeep.png'
import Careem from '../../img/Careem.png'
import HubSpot from '../../img/HubSpot.png'
import jQuery from '../../img/jQuery.png'
import Canon from '../../img/Canon.png'
import FedEx from '../../img/FedEx.png'
import Bitcoin from '../../img/bitcoin.png'
import Pirelli from '../../img/Pirelli.png'
import Philips from '../../img/Philips.png'
import Firstimg from '../../img/Firstimg.png'
import Fourthimg from '../../img/Fourthimg.png'
import Seventhimg from '../../img/Seventhimg.png'
import Secondimg from '../../img/Secondimg.png'
import Thirdimg from '../../img/Thirdimg.png'
import Fifthimg from '../../img/Fifthimg.png'
import Sixthimg from '../../img/Sixthimg.png'
import Eighthimg from '../../img/Eighthimg.png'
import Ninthimg from '../../img/Ninthimg.png'

const Works = () => {
  return (
    <div>
      <div className='check'>
        <div className='check_text'>
          Check out some of our amazing projects!
        </div>
        <img src={Statistics} className='statistics' />
      </div>
      <div className='check_customers'>
        <div className='customer'>
          <h6 className='great'>Some of Our Great Customers</h6>
          <h3 className='companies'>
            Some of the companies we have worked with
          </h3>
        </div>
        <div className='great_companies'>
          <div className='first_row'>
            <img src={Amazon} className='amazon' />
            <img src={Jeep} className='jeep' />
            <img src={Careem} className='careem' />
            <img src={HubSpot} className='hubSpot' />
            <img src={jQuery} className='jQuery' />
          </div>
          <div className='second_row'>
            <img src={Canon} className='canon' />
            <img src={FedEx} className='fedex' />
            <img src={Bitcoin} className='bitcoin' />
            <img src={Pirelli} className='pirelli' />
            <img src={Philips} className='philips' />
          </div>
        </div>
      </div>
      <div className='latest_project'>
        <div className='latest_project_text'>
          <h6>Our Latest Project</h6>
          <h3>This is the last variety of projects we have worked on</h3>
        </div>
        <div className='latest_project_boxes'>
          <div className='first_box'>
            <div className='box_text'>
              <h3>M'Course</h3>
              <hr />
              <h5>Online learning application course</h5>
            </div>
            <div className='box_image'>
              <img src={Firstimg} />
            </div>
          </div>
          <div className='second_box'>
            <div className='box_text'>
              <h3>BurgerQ</h3>
              <hr />
              <h5>Application for buying and selling fast food online</h5>
            </div>
            <div className='two_boxes'>
              <div className='box_images'>
                <img src={Secondimg} />
              </div>
              <div className='box_images'>
                <img src={Thirdimg} />
              </div>
            </div>
          </div>
          <div className='third_box'>
            <div className='box_text'>
              <h3>POPcorn</h3>
              <hr />
              <h5>Online marketplace for buying and selling popcorn</h5>
            </div>
            <div className='box_image'>
              <img src={Fourthimg} />
            </div>
          </div>
          <div className='fourth_box'>
            <div className='box_text'>
              <h3>CoffeeJoy</h3>
              <hr />
              <h5>Application for buying and selling coffee online</h5>
            </div>
            <div className='two_boxes'>
              <div className='box_images'>
                <img src={Fifthimg} />
              </div>
              <div className='box_images'>
                <img src={Sixthimg} />
              </div>
            </div>
          </div>
          <div className='fifth_box'>
            <div className='box_text'>
              <h3>Alpaca</h3>
              <hr />
              <h5>Fundraising and caring for alpacas</h5>
            </div>
            <div className='box_image'>
              <img src={Seventhimg} />
            </div>
          </div>
          <div className='sixth_box'>
            <div className='box_text'>
              <h3>Shopipiy</h3>
              <hr />
              <h5>Online marketplace to sell and buy clothes</h5>
            </div>
            <div className='two_boxes'>
              <div className='box_images'>
                <img src={Eighthimg} />
              </div>
              <div className='box_images'>
                <img src={Ninthimg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
