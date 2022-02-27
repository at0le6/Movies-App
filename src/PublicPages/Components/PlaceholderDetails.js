import React from 'react'
import {Placeholder} from 'react-bootstrap'

function PlaceholderDetails() {
  return (
    <div>
        <div className='mb-3'>
        <Placeholder as="p" animation="glow">
            <Placeholder xs={2} />
        </Placeholder>
        </div>
        <div className='mb-2'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={3} style={{height:'2rem'}}/>
            </Placeholder>
        </div>
    </div>
  )
}

export default PlaceholderDetails