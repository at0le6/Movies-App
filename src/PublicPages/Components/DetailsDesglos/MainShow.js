import React from 'react'
import {Card,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'
import useBreakpoint from '../../../hooks/BreakPoint';

function MainShow() {
    const DataSelected=useSelector(state=>state.infoShow);
    let {name,type,genres,status,officialSite,image,summary,network}=DataSelected.main;
    const lastEpisodes=DataSelected.episodes.filter((e,i)=>
    {
        let last4= DataSelected.episodes.length-6;
        return i>last4;
    }).reverse();
    genres=Object.keys(DataSelected.main).length!==0?genres.join(" | "):null;
    function MainInfo()
    {
        return {__html:summary};
    } 
    const Cast=DataSelected.cast.map(e=>
        {
            return [e.person?.id,e.person?.name,e.person?.image?.medium]
        }).filter((e,i)=>i<4);
    let size=useBreakpoint();
  return (
    <div className='container'>
            <Row>
                <Col xs={12} md={12} lg={8}>
                    <div className='d-flex'>
                        <img src={image?.original} alt={name} className={size!=="sm"?'DetailsMainImageLg':'DetailsMainImageSm'}/>
                        <div className='ps-2' dangerouslySetInnerHTML={MainInfo()}/>
                    </div>
                </Col>
                <Col xs={6} md={12} lg={4}>
                <Card className='w-auto'> 
                    <Card.Body>
                        <Card.Title className='fw-light fs-2'>Show Details</Card.Title>
                        <Card.Text>
                            <span className='fw-bold'>Network: </span>{network?.name}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Genres: </span>{genres}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Status: </span>{status}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Show Type: </span>{type}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Official Site: </span><a href='officialSite'>{officialSite}</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <h2 className='py-3'>Last espisodes</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#No</th>
                    <th scope="col">Episodes Name</th>
                    <th scope="col">AireDate</th>
                </tr>
                </thead>
                <tbody>
                {lastEpisodes.map(e=>{
                    return (<tr key={e?.url}>
                        <th scope='row'>Season: {e?.season}  -  Episode: {e?.number}</th>
                        <td>{e?.name}</td>
                        <td>{e?.airdate}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            <h2 className='py-3'>Cast preview</h2>
            <div className='container'>
                <div className='d-flex justify-content-between flex-wrap'>
                 {Cast.map(e=>(
                     <Card as={Link} to={`/people/${e[0]}`} key={e[2]} className='cardt'>
                         <Card.Img variant='top' src={e[2]}/>
                         <Card.Body>
                             <Card.Title>{e[1]}</Card.Title>
                         </Card.Body>
                     </Card>
                 ))}
                </div>
            </div>
            </div>
  )
}

export default MainShow