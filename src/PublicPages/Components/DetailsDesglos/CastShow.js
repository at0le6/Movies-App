import React from 'react'
import {useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CastShow() {
  const casts=useSelector(state=>state.infoShow.cast)
  return (
    <div className='d-flex justify-content-between flex-wrap my-2'>
      {casts.map(e=>(
        <Card as={Link} to={`/people/${e.person?.id}`} key={e.person?.image?.medium} className='cardt'>
        <Card.Img variant='top' src={e.person?.image?.medium}/>
        <Card.Body>
            <Card.Title>{e.person?.name}</Card.Title>
            <Card.Subtitle as={Link} to={`/people/character/${e.character.id}`} className='fs-6 fw-light text-muted'>as {e.character.name}</Card.Subtitle>
        </Card.Body>
    </Card>
      ))}
    </div>
  )
}

export default CastShow