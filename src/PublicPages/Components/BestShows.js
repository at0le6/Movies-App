import React from 'react'
import {useSelector} from 'react-redux'
import {Card,Placeholder} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BestShows() {
    const movies=useSelector(state=>state.Allmovies.movies)
    const preLoad=[0,1,2,3,4,5,6,7,8];
  const LoandingData=preLoad.map(e=>{
    return (<Card key={e} className='cardt'>
    <div className='loandingImage'></div>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
    </Card.Body>
  </Card>)
  })
  console.log();
  const ListingData=movies.map(e=>{
    const {name,id,image}=e;
    return (<Card as={Link} to={`/shows/${id}`} key={id} className='cardt'>
    <Card.Img variant="top" src={image.medium} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
      </Card>)
  }
)
  return (
    <>
    {movies.length!==0?ListingData:LoandingData}
    <Card as={Link} to='/shows' className='cardt'>
      <Card.Body className='NextCad'>
        <Card.Title>More Shows</Card.Title>
        <Card.Text>
          Click here to see more Shows
        </Card.Text>
      </Card.Body>
      </Card>
    </>
  )
}

export default BestShows