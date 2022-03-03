import {useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {Breadcrumb} from 'react-bootstrap'
import { setMovie,deSelectMovie} from '../redux/actions/movies.actions'
import BestShows from './Components/BestShows'
function BasePage() {
    const dispach=useDispatch()
    const HomeShowsTop= async()=>
    {
        const response=await axios.get('https://api.tvmaze.com/shows').catch(e=>console.log(e));
        const movies=response.data;
        const movie=movies.filter(e=>{return e.rating?.average>8.5})
        dispach(setMovie({movies:movie}))
    }
    useEffect(()=>{
        HomeShowsTop()
        return ()=>
        {
            dispach(deSelectMovie());
        }
    },[])
  return (
    <div className='container mt-3'>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className='pb-3'>Best shows</h2>
        <div className='d-flex justify-content-between flex-wrap'>
            <BestShows/>
        </div>
    </div>
  )
}

export default BasePage