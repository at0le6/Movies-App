import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios';
import {setMovie,deSelectMovie} from '../redux/actions/movies.actions'
import {useDispatch,useSelector} from 'react-redux'
import PaginationList from './Components/SubComponent/Comon_FIles/PaginationList';

function ShowsPage() {
  const movies=useSelector(state=>state.Allmovies.movies);
  const dispach=useDispatch();
    useEffect(()=>{
        const fetch=async ()=>
        {
            const response=await axios.get('https://api.tvmaze.com/shows')
            const movies=response.data;
            dispach(setMovie({movies:movies}));
        }
        fetch()
        return ()=>{
            dispach(deSelectMovie())
        }
    },[])
  return (
    <div className='container pt-3 '>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shows</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className='mb-2'>Shows</h2>
        <PaginationList movies={movies} route='shows'/>
    </div>
  )
}

export default ShowsPage