import {useState} from 'react'
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

function LinksHeader({navData}) {
  const navigate=useNavigate()
  const [text,setText]=useState('');
  const onChange=(q)=>setText(q);
  const onSearch=(event)=>{
    event.preventDefault();
    navigate(`/shows/${text}`)};
  return <><Nav
  className={navData}
  navbarScroll
>
  <Nav.Link as={Link} to='/shows'>Shows</Nav.Link>
  <Nav.Link as={Link} to='/people'>People</Nav.Link>
  <Nav.Link as={Link} to='/networks'>Networks</Nav.Link>
</Nav>
  <Form onSubmit={(e)=>onSearch(e)} className="d-flex">
  <FormControl
    type="search"
    placeholder="Search"
    className="me-2 inputSearch"
    aria-label="Search"
    value={text}
    onChange={(e) => onChange(e.target.value)}
  />
  <Button type="submit" variant="outline-success">Search</Button>
  </Form></>
}

export default LinksHeader