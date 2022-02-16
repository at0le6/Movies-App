import {useEffect} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { setMovie,removeSelectedMovie} from '../redux/actions/movies.actions'
import BestShows from './Components/BestShows'
function BasePage() {
    const movies=useSelector(state=>state);
    const dispach=useDispatch()
    const HomeShowsTop= async()=>
    {
        const response=await axios.get('https://api.tvmaze.com/shows');
        const movies=response.data
        dispach(setMovie({movies:movies}))
    }
    useEffect(()=>{
        HomeShowsTop()
        return ()=>{
            dispach(removeSelectedMovie())
        }
    },[])
  return (
    <div className='container mt-3'>
        <h2 className='pb-3'>Best shows</h2>
        <div className='d-flex'>
            <BestShows/>
        </div>
    </div>
  )
}

export default BasePage