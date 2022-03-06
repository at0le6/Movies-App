import {useState,useEffect} from 'react'
import { Breadcrumb,Tab,Tabs } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {deSelectShowInfo,deSelectPeopleInfo} from '../redux/actions/movies.actions'
import PlaceholderDetails from './Components/PlaceholderDetails'
import MainPeople from './Components/DetailsDesglos/MainPeople'

function PeopleDetails() {
    const dispach=useDispatch()
    const [key, setKey] = useState('main');
    const DataSelected=useSelector(state=>state.infoPeople);
    const {name}=DataSelected.mainPeople;
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
      {Object.keys(DataSelected.mainPeople).length===0?<PlaceholderDetails/>:<div>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/people" }}>People</Breadcrumb.Item>
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
            <MainPeople/>
        </Tab>
        </Tabs>
    </div>}
    </>
  )
}

export default PeopleDetails