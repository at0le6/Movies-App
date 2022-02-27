import { useState,useEffect} from 'react'
import {Card,Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function PaginationList({movies,getPage}) {
  const chunck=15;
  const initialPosition=0
  const initialApiPagePosition=1
  //Pagination==Bootrap Component
  //Refers to the fetch api page
  const [page,setPage]=useState(initialApiPagePosition);
  //Refers to the currently displayed chunck
  const [section,setSection]=useState(chunck);
  //Refers to the currently Pagination that we are
  const [currentPage,setCurrentPage]=useState(initialPosition);
  //Refers to how many times the Pagination increment or decrese
  const [plus, setPlus] = useState(initialPosition);
  //Refers to the first 5 elements of Paginations component
  const componentMap=[1,2,3,4,5];
  //Go to the Top on
  const scrollToTop = () => {
    window.scrollTo({
      top: initialPosition,
      behavior: "smooth"
    });
  };
  //Its the Card Component that we loop to set All the shows
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
  //Its the way that we select a chunck to display
  const reduceList=ListingData.filter((e,i)=>{
    const prevI=section===chunck?initialPosition:section-chunck;
    return i>prevI&&i<=section
    }
  )
  /*Its the function to check if we get at the limit of currently 
  data to get another fetch to get more data as needed this depends in the redux data fetch that we recive as
  a PROPS in this component*/
  useEffect(()=>{
    if(section>(240*page))
  {
    setPage(page+1);
    getPage(page);
  }
  },[section,page])
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    const changeSection=chunck*pageNumber;
    scrollToTop();
    setSection(changeSection)
    setCurrentPage(pageNumber-1);
 }
 function FirstPage()
 {
  scrollToTop();
  setSection(chunck)
  setCurrentPage(initialPosition);
  setPlus(initialPosition);
 }
 function NextPage()
 {
  setCurrentPage(currentPage+1);
  const changeSection=chunck*(currentPage+2);
  setSection(changeSection)
  if(!currentPage<5)setPlus(plus+1)
 }
 function PastPage()
 {
  setCurrentPage(currentPage-1);
  const changeSection=chunck*(currentPage);
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