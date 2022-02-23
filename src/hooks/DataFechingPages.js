import {useEffect,useState} from 'react'
import {Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {setMovie,deSelectMovie} from '../redux/actions/movies.actions'
import {useDispatch,useSelector} from 'react-redux'
import PaginationList from './PaginationList';

function DataFechingPages({UriPage,activeBreadCrum}) {
    const data=useSelector(state=>state.Allmovies.movies);
    const dispach=useDispatch();
    const [page,setPage]=useState(1)
    useEffect(()=>{
        return ()=>
        {
            dispach(deSelectMovie())
        }
    },[])
    useEffect(()=>{
        const fetch=async ()=>
        {
            const response=await axios.get(page===1?`${UriPage}`:`${UriPage}?page=${page}`)
            let newData=response.data;
            newData=page>1?[...data,...newData]:newData;
            dispach(setMovie({movies:newData}));
        }
        fetch()
        },[page])
    return (
        <div className='container pt-3 '>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{activeBreadCrum}</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className='mb-2'>Shows</h2>
        <PaginationList movies={data} getPage={(Num)=>setPage(Num+1)}/>
    </div>
    )
}

export default DataFechingPages