import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useParams,Link} from 'react-router-dom'
import {Breadcrumb} from 'react-bootstrap'
import axios from 'axios'
import {setMovie,deSelectMovie} from '../redux/actions/movies.actions'
import CardSearchComponent from './Components/CardSearchComponent';

function SearchListing() {
  const {query}=useParams();
  const dispach=useDispatch()
  useEffect(()=>{
    const fetchData= async ()=>
    {
      const respose=await (await axios("https://api.tvmaze.com/search/shows?q="+query)).data;
      dispach(setMovie({movies:respose}))
    }
    fetchData()
    return ()=>
    {
      dispach(deSelectMovie())
    }
  },[])
  return (
    <div className='container'>
      <Breadcrumb className='my-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Search</Breadcrumb.Item>
        </Breadcrumb>
      <h2 className='my-2'>
        Results
      </h2>
      <CardSearchComponent/>
    </div>
  )
}

export default SearchListing