import {useEffect} from 'react'
import {useParams,useLocation,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {deSelectPeopleInfo,deSelectShowInfo,setShowInfo,setPeopleInfo} from '../redux/actions/movies.actions'
import ShowsDetails from '../PublicPages/ShowsDetails';
import PeopleDetails from '../PublicPages/PeopleDetails';

function DataDetailsFetching() {
  const navigate=useNavigate();
  const {id}=useParams();
  const path=useLocation().pathname
  const regexExp=/(?<=\/)(.*?)(?=\/)/;
  const getRoute=()=>
    {
    if(regexExp.test(path))
    {
      return regexExp.exec(path)[0];
    }
    return 'No route asigned'
  }
  let dispach=useDispatch();
  useEffect(()=>{
    const fetchData= async()=>
    {
      const typeOfFetch=getRoute()
      if(typeOfFetch==="people")
      {
          const mainPeople=await (await axios.get(`https://api.tvmaze.com/people/${id}`)).data
          //return ({mainPeople});
          console.log("people")
          dispach(setPeopleInfo({mainPeople}));
      }
      else if(typeOfFetch==="shows")
      {
        const main=await (await axios.get(`https://api.tvmaze.com/shows/${id}`)).data
          const episodes=await (await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)).data;
          const season=await (await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`)).data;
          const cast=await (await axios.get(`https://api.tvmaze.com/shows/${id}/cast`)).data;
          const crew=await (await axios.get(`https://api.tvmaze.com/shows/${id}/crew`)).data;
          const gallery=await (await axios.get(`https://api.tvmaze.com/shows/${id}/images`)).data;
          dispach(setShowInfo({main,episodes,season,cast,crew,gallery}));
      }
    }
    fetchData()
  },[path])
  return (
    <div className='container my-3'>
      {getRoute()==="shows"?<ShowsDetails params={id}/>:<PeopleDetails/>}
    </div>
  )
}

export default DataDetailsFetching