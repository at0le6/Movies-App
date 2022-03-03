import React from 'react'
import {useSelector} from 'react-redux'
import {Col} from 'react-bootstrap'

function SeasonShow() {
    const seasons=useSelector(state=>state.infoShow.season)
  return (
    <div className='d-flex flex-column'>
        {seasons.map(e=>(
            <div className='my-2'>
                    <div className='d-flex'>
                    <img src={e.image?.medium||"Not found"} />
                    <div className='ms-2'>
                        <h2 className='mb-3'>Season {e.number}</h2>
                        <h3 className='mb-2 fw-light text-muted fs-4'>{e.network?.name}</h3>
                        <div className='fs-6' dangerouslySetInnerHTML={{__html:e.summary}}/>
                    </div>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default SeasonShow