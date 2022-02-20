import { useState,useEffect} from 'react'
import {Card,Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PaginationList({movies,route}) {
  const [page,setPage]=useState(0);
  const [section,setSection]=useState(16);
  const [currentPage,setCurrentPage]=useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const ListingData=movies.map(e=>{
    const {name,id,image}=e;
    return (<Card as={Link} to={`${route}/${id}`} key={id} className='cardt'>
    <Card.Img variant="top" src={image.medium} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
      </Card>)
    }
  )
  const reduceList=ListingData.filter((e,i)=>{
    const prevI=section==16?0:section-16;
    return i>prevI&&i<=section
    }
  )
  useEffect(()=>{

  },[section])
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    const changeSection=16*pageNumber;
    setSection(changeSection)
    setCurrentPage(pageNumber-1);
    scrollToTop();
 }
  return (
    <>
    <div className='d-flex justify-content-between flex-wrap'>
      {reduceList}
    </div>
    <Pagination className='justify-content-center my-3'>
  <Pagination.First />
  <Pagination.Prev />
  {[...Array(5)].map((e,i)=>{
    return(<Pagination.Item
       className={currentPage==i?'active':''} 
       key={i.toString()+'pagination'}
       onClick={changePage}
            >
              {i+1}
          </Pagination.Item>)
  })}
  <Pagination.Ellipsis />
  <Pagination.Next />
</Pagination>
    </>
  )
}

export default PaginationList