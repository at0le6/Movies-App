import React from 'react'
import {Card,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
import useBreakpoint from '../../../hooks/BreakPoint';

function MainPeople() {
  const DataSelected=useSelector(state=>state.infoPeople);
  const {name,birthday,gender,deathday,image,country}=DataSelected.mainPeople;
  let size=useBreakpoint();
  return (
    <div className='container'>
            <Row>
                <Col xs={12} md={12} lg={8}>
                    <div className='d-flex'>
                        <img src={image?.original} alt={name} className={size!=="sm"?'DetailsMainImageLg':'DetailsMainImageSm'}/>
                        <div className='ps-2'>
                          <p>{name}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={12} lg={4}>
                <Card className='w-auto'> 
                    <Card.Body>
                        <Card.Title className='fw-light fs-2'>Show Details</Card.Title>
                        <Card.Text>
                            <span className='fw-bold'>Gender: </span>{gender}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Age: </span>{gender}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Birthday: </span>{birthday}
                        </Card.Text>
                        {deathday=== 'null'?<></>:<Card.Text>
                            <span className='fw-bold'>Deathday: </span>{deathday}
                        </Card.Text>}
                        <Card.Text>
                            <span className='fw-bold'>Born in: </span>{country.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
  )
}

export default MainPeople