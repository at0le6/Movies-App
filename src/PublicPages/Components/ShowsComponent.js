import {useEffect} from 'react'
import axios from 'axios';
import {setMovie,deSelectMovie} from '../../redux/actions/movies.actions'
import {useDispatch} from 'react-redux'

function ShowsComponent() {
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
    <div>ShowsComponent</div>
  )
}

export default ShowsComponent