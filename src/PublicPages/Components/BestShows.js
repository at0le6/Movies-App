import React from 'react'
import {useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BestShows() {
    const movies=useSelector(state=>state.Allmovies.movies)
  return (
    <>{Object.keys(movies).length===0?<p>Loanding...</p>:movies.map(e=>
        <Card key={e.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{e}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
    </Card>
    )})</>
  )
}

export default BestShows