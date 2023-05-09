import React from 'react'
import IdeateIcon from '../../icons/IdeateIcon'
import AppIcon from '../../icons/AppIcon'
import DesignIcon from '../../icons/DesignIcon'
import WebIcon from '../../icons/WebIcon'
import BusinessIcon from '../../icons/BusinessIcon'
import DigitalIcon from '../../icons/DigitalIcon'
import './services.css'

const serviceArr = [
  {
    title: 'Ideate',
    description:
      'We help you develop creative ideas so that your business can grow more rapidly',
    icon: <IdeateIcon />,
  },
  {
    title: 'Design',
    description:
      'We provide services with the best designs than our designer team for your business',
    icon: <DesignIcon />,
  },
  {
    title: 'Web Development',
    description:
      'We help develop company websites to be more professional and attractive',
    icon: <WebIcon />,
  },
  {
    title: 'App Development',
    description:
      'We help develop company mobile apps to be more professional and attractive',
    icon: <AppIcon />,
  },
  {
    title: 'Business Growth',
    description:
      'We also provide services by providing input for your business growth',
    icon: <BusinessIcon />,
  },
  {
    title: 'Digital marketing',
    description:
      'We also help you market your products through an online marketplace',
    icon: <DigitalIcon />,
  },
]

const Services = () => (
  <div>
    <div className='services'>
      <div className='our__services'>
        <h6 className='our_services'>Our Services</h6>
        <h3 className='various'>
          The various services we provide to make your business more powerful
        </h3>
      </div>

      <div className='icons_1'>
        {serviceArr.map((service) => {
          return (
            <div className='icon_2'>
              <div className='icon_main'>{service.icon}</div>

              <div className='ideate'>
                <h6 className='design'>{service.title}</h6>
                <p className='provide'>{service.description}</p>
              </div>
              <div className='icon__bottom'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 21 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.91083 14.4109L11.0892 15.5892L16.6783 10.0001L11.0892 4.41089L9.91083 5.58922L13.4883 9.16672H5.5V10.8334H13.4883L9.91083 14.4109Z'
                    fill='#4C40F7'
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default Services
