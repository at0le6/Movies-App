import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Card} from 'react-bootstrap'

function CardSearchComponent() {
const search=useSelector(state=>state.Allmovies.movies);
  return (
    <div className='d-flex justify-content-between flex-wrap'>
                 {search.length===0?<p>Loanding...</p>:
                 search.map(e=>(
                    <Card as={Link} to={`/shows/${e.show?.id}`} key={e.show?.image?.medium} className='cardt'>
                        <Card.Img variant='top' src={e.show?.image?.medium}/>
                        <Card.Body>
                            <Card.Title>{e.show?.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
    </div>
  )
}

export default CardSearchComponent