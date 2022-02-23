import {useEffect} from 'react'
import {useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setSelectedMovie,removeSelectedMovie} from '../redux/actions/movies.actions'

function DetailsPage() {
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
  const dispach=useDispatch();
  useEffect(()=>{
    const fetchData= async()=>
    {
      const typeOfFetch=getRoute()
      const Uri=typeOfFetch==="shows"?`https://api.tvmaze.com/shows/${id}`:` https://api.tvmaze.com/people/${id}`
      const data=await axios.get(Uri)
      dispach(setSelectedMovie(data.data))
    }
    fetchData();
    return ()=>
    {
      dispach(removeSelectedMovie());
    }
  },[])
  return (
    <>
    <h1>Hi</h1>
    </>
  )
}

export default DetailsPage