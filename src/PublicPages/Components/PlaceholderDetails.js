import React from 'react'
import {Placeholder,Col,Card,Row} from 'react-bootstrap'

function PlaceholderDetails() {
  return (
    <div>
        <div className='mb-3'>
        <Placeholder as="p" animation="glow">
            <Placeholder xs={2} />
        </Placeholder>
        </div>
        <div className='mb-5'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={3} style={{height:'2rem'}}/>
            </Placeholder>
        </div>
        <div className='mb-2'>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={1}/>{'  '}
                <Placeholder xs={1}/>{'  '}
                <Placeholder xs={1}/>{'  '}
                <Placeholder xs={1}/>{'  '}
                <Placeholder xs={1}/>{'  '}
            </Placeholder>
        </div>
        <div className='mb2'>
        <Row>
                <Col xs={12} md={12} lg={8}>
                    <div className='d-flex'>
                        <Placeholder xs={10} style={{height:'17rem'}}/>
                    </div>
                </Col>
                <Col xs={6} md={12} lg={4}>
                <Card className='w-auto'> 
                    <Card.Body>
                        <Card.Title className='fw-light fs-2'><Placeholder as="p" animation="glow">
                <Placeholder xs={9}/>
            </Placeholder></Card.Title>
                        <Card.Text>
                        <Placeholder as="p" animation="glow">
                <Placeholder xs={6}/>
            </Placeholder>
                        </Card.Text>
                        <Card.Text>
                        <Placeholder as="p" animation="glow">
                <Placeholder xs={8}/>
            </Placeholder>
                        </Card.Text>
                        <Card.Text>
                        <Placeholder as="p" animation="glow">
                <Placeholder xs={7}/>
            </Placeholder>
                        </Card.Text>
                        <Card.Text>
                        <Placeholder as="p" animation="glow">
                <Placeholder xs={4}/>
            </Placeholder>
                        </Card.Text>
                        <Card.Text>
                        <Placeholder as="p" animation="glow">
                <Placeholder xs={6}/>
            </Placeholder>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default PlaceholderDetails