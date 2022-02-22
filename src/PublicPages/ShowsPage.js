import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios';
import {setMovie,deSelectMovie} from '../redux/actions/movies.actions'
import {useDispatch,useSelector} from 'react-redux'
import PaginationList from './Components/SubComponent/Comon_FIles/PaginationList';

function ShowsPage() {
  const pelis=useSelector(state=>state.Allmovies.movies);
  const dispach=useDispatch();
  const [page,setPage]=useState(1)
    useEffect(()=>{
        const fetch=async ()=>
        {
            console.log('ShowPage Component   '+page)
            const response=await axios.get(page===1?'https://api.tvmaze.com/shows':`https://api.tvmaze.com/shows?page=${page}`)
            const movie=response.data;
            let moviesAcum=[...pelis,movie];
            dispach(setMovie({movies:moviesAcum[0]}));
        }
        fetch()
        return ()=>{
            dispach(deSelectMovie())
        }
    },[page,pelis])
  return (
    <div className='container pt-3 '>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shows</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className='mb-2'>Shows</h2>
        <PaginationList movies={pelis} getPage={(Num)=>setPage(Num)}/>
    </div>
  )
}

export default ShowsPage