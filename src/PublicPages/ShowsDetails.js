import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Breadcrumb,Tabs,Tab,Row,Col,Card} from 'react-bootstrap'
import PlaceholderDetails from './Components/PlaceholderDetails';
import useBreakpoint from '../hooks/BreakPoint';

function ShowsDetails({params}) {
    const [key, setKey] = useState('main');
    const DataSelected=useSelector(state=>state.infoShow);
    const data={};
    let {name,type,genres,status,officialSite,image,summary,network}=DataSelected.main;
    genres=Object.keys(DataSelected.main).length!==0?genres.join(" | "):null;
    function MainInfo()
    {
        return {__html:summary};
    } 
    const main=()=>
    {
        setKey("main");
    }
    let size=useBreakpoint();
  return (
    <>
    {Object.keys(DataSelected.main).length===0?<PlaceholderDetails/>:<div>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/shows" }}>Shows</Breadcrumb.Item>
            {key==="main"?<Breadcrumb.Item active>{name}</Breadcrumb.Item>:
                <Breadcrumb.Item onClick={main} >{name}</Breadcrumb.Item>}
            {key!=="main"?<Breadcrumb.Item active>{key}</Breadcrumb.Item>:<></>}
        </Breadcrumb>
        <h2 className='mb-2 fs-1'>{name}</h2>
        <Tabs 
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
        <Tab eventKey="main" title="Main">
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
            <h2 className='py-3'>Past espisodes</h2>
            
            </div>
        </Tab>
        <Tab eventKey="episodes" title="Episodes">
            <h1>Hi</h1>
        </Tab>
        <Tab eventKey="season" title="Season">
            <h1>Hi</h1>
        </Tab>
        <Tab eventKey="cast" title="Cast">
            <h1>Hi</h1>
        </Tab>
        <Tab eventKey="crew" title="Crew">
            <h1>Hi</h1>
        </Tab>
        <Tab eventKey="gallery" title="Gallery">
            <h1>Hi</h1>
        </Tab>
        </Tabs>
    </div>}
    </>
  )
}

export default ShowsDetails