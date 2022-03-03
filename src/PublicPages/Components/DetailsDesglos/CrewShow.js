import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function CrewShow() {
    const crews=useSelector(state=>state.infoShow.crew)
  return (
    <div className='d-flex justify-content-between flex-wrap my-2'>
        {crews.map(e=>(
            <Card as={Link} to={`/people/${e.person?.id}`} key={e.person?.image?.medium+"Crew"} className='cardt'>
            <Card.Img variant='top' src={e.person?.image?.medium}/>
            <Card.Body>
                <Card.Title>{e.person?.name}</Card.Title>
                <Card.Subtitle className='fs-6 fw-light text-muted'>as {e.type}</Card.Subtitle>
            </Card.Body>
        </Card>
        ))}
    </div>
  )
}

export default CrewShow