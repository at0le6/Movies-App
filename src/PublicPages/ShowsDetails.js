import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {Breadcrumb,Tabs,Tab,Row,Col,Card} from 'react-bootstrap'
import PlaceholderDetails from './Components/PlaceholderDetails';
import MainShow from './Components/DetailsDesglos/MainShow';
import EpisodesShow from './Components/DetailsDesglos/EpisodesShow';
import SeasonShow from './Components/DetailsDesglos/SeasonShow';
import CastShow from './Components/DetailsDesglos/CastShow';
import CrewShow from './Components/DetailsDesglos/CrewShow';
import GalleryShow from './Components/DetailsDesglos/GalleryShow';
import {deSelectShowInfo,deSelectPeopleInfo} from '../redux/actions/movies.actions'

function ShowsDetails({params}) {
    const dispach=useDispatch()
    const [key, setKey] = useState('main');
    const DataSelected=useSelector(state=>state.infoShow);
    const {name}=DataSelected.main;
    const main=()=>
    {
        setKey("main");
    }
    useEffect(()=>{
        return()=>
        {
            dispach(deSelectShowInfo())
            dispach(deSelectPeopleInfo());
        }
    },[])
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
            <MainShow/>
        </Tab>
        <Tab eventKey="episodes" title="Episodes">
            <EpisodesShow/>
        </Tab>
        <Tab eventKey="season" title="Season">
            <SeasonShow/>
        </Tab>
        <Tab eventKey="cast" title="Cast">
            <CastShow/>
        </Tab>
        <Tab eventKey="crew" title="Crew">
            <CrewShow/>
        </Tab>
        <Tab eventKey="gallery" title="Gallery">
            <GalleryShow/>
        </Tab>
        </Tabs>
    </div>}
    </>
  )
}

export default ShowsDetails