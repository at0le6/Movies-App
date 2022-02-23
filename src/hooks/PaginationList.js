import { useState,useEffect} from 'react'
import {Card,Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PaginationList({movies,getPage}) {
  const [page,setPage]=useState(1);
  const [section,setSection]=useState(15);
  const [currentPage,setCurrentPage]=useState(0);
  const [plus, setPlus] = useState(0);
  const componentMap=[1,2,3,4,5];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const ListingData=movies.map(e=>{
    const {name,id,image}=e;
    return (<Card as={Link} to={`${id}`} key={image?.medium} className='cardt'>
    <Card.Img variant="top" src={image?.medium}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
      </Card>)
    }
  )
  const reduceList=ListingData.filter((e,i)=>{
    const prevI=section===15?0:section-15;
    return i>prevI&&i<=section
    }
  )
  useEffect(()=>{
    if(section>(240*page))
  {
    setPage(page+1);
    getPage(page);
  }
  },[section,page])
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    const changeSection=15*pageNumber;
    scrollToTop();
    setSection(changeSection)
    setCurrentPage(pageNumber-1);
 }
 function FirstPage()
 {
  scrollToTop();
  setSection(15)
  setCurrentPage(0);
  setPlus(0);
 }
 function NextPage()
 {
  setCurrentPage(currentPage+1);
  const changeSection=15*(currentPage+2);
  setSection(changeSection)
  if(!currentPage<5)setPlus(plus+1)
 }
 function PastPage()
 {
  setCurrentPage(currentPage-1);
  const changeSection=15*(currentPage);
  setSection(changeSection)
  if(!currentPage<5)setPlus(plus-1)
 }
 
  return (
    <>
    <div className='d-flex justify-content-between flex-wrap'>
      {reduceList}
    </div>
    <Pagination className='justify-content-center my-3'>
  <Pagination.First onClick={FirstPage} />
  <Pagination.Prev onClick={PastPage}/>
  {componentMap.map((e,i)=>{
    let pages;
    if(currentPage<5)
    {
      pages=e;
    }
    else
    {
      pages=e+plus;
    }
    return(<Pagination.Item
       className={currentPage===(pages-1)?'active':''} 
       key={i.toString()+'pagination'}
       onClick={changePage}
            >
              {pages}
          </Pagination.Item>)
  })}
  <Pagination.Next onClick={NextPage}/>
</Pagination>
    </>
  )
}

export default PaginationList