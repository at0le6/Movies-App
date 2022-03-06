import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function GalleryShow() {
    const galleries=useSelector(state=>state.infoShow)
    const uniqueTypes=galleries.gallery.map(e=>e.type).filter((value,i,self)=>self.indexOf(value)===i)
    return (
        <>
        {uniqueTypes.map(e=>(
            <>
                <h2>{e.charAt(0).toUpperCase() + e.slice(1)}</h2>
                <div className='d-flex justify-content-center flex-wrap my-2'>
                {galleries.gallery.filter(element=>element.type===e).map(j=>(
                    <Card key={j?.resolutions?.original?.url+"Gallery"}>
                    <Card.Img variant='top' src={j?.resolutions?.original?.url}
                        className={e==="background"?"imgBack":e==="poster"?"imgPost":e==="banner"?"imgBann":"imgtypo"}
                    />
                </Card>
                ))}
                </div>
            </>
        ))}
    </>
  )
}

export default GalleryShow