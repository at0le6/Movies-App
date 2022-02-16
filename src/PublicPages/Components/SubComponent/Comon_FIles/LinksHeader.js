import React from 'react'
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function LinksHeader({navData}) {
  return <><Nav
  className={navData}
  navbarScroll
>
  <Nav.Link as={Link} to='/shows'>Shows</Nav.Link>
  <Nav.Link as={Link} to='/people'>People</Nav.Link>
  <Nav.Link as={Link} to='/networks'>Networks</Nav.Link>
</Nav>
<Form className="d-flex">
  <FormControl
    type="search"
    placeholder="Search"
    className="me-2 inputSearch"
    aria-label="Search"
  />
  <Button variant="outline-success">Search</Button>
</Form></>
}

export default LinksHeader