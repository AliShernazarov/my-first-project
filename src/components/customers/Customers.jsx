import React from 'react'
import './customers.css'
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

const Customers = () => {
  return (
    <div className='customers'>
      <div className='customer'>
        <h6 className='great'>Some of Our Great Customers</h6>
        <h3 className='companies'>Some of the companies we have worked with</h3>
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
  )
}

export default Customers
