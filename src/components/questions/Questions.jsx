// import React from 'react'
// import './questions.css'

// const Questions = () => {
//   return (
//     <div className='questions'>
//       <div className='question'>
//         <h6 className='ask'>Frequently Ask Question</h6>
//         <h3 className='frequently'>Some of our frequently asked questions</h3>
//       </div>
//       <div className='accordions'></div>
//     </div>
//   )
// }

// export default Questions

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import React from 'react'
import './questions.css'

const data = [
  {
    question: 'What are the services provided to customers?',
    answer:
      'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.',
  },
  {
    question: 'How can I submit a proposal for cooperation?',
    answer:
      'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.',
  },
  {
    question:
      'I come from a faraway place, can collaboration be done full time online through several meeting applications?',
    answer:
      'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.',
  },
  {
    question: 'How do I get the payment complete?',
    answer:
      'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.',
  },
  {
    question: 'How long can the collaboration last?',
    answer:
      'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.',
  },
]

const Questions = () => {
  return (
    <div className='questions'>
      <div className='question'>
        <h6 className='ask'>Frequently Ask Question</h6>
        <h3 className='frequently'>Some of our frequently asked questions</h3>
      </div>
      <div className='accordions'>
        {data.map(({ question, answer }) => {
          return (
            <Box height='100%'>
              <Accordion>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
                >
                  <Box sx={{ fontFamily: 'Poppins' }}>{question}</Box>
                </AccordionSummary>
                <hr />
                <AccordionDetails sx={{ py: '0 !important' }}>
                  {answer}
                </AccordionDetails>
              </Accordion>
            </Box>
          )
        })}
      </div>
    </div>
  )
}

export default Questions
