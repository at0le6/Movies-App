import {Navbar,Container,InputGroup,Button,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import useBreakpoint from '../../hooks/BreakPoint';
import CollapseHeader from './SubComponent/CollapseHeader';
import OffcanvasHeader from './SubComponent/OffcanvasHeader';

function Header() {
  console.log(useBreakpoint())
  return <Navbar bg="dark" variant="dark" expand={useBreakpoint()==="sm"?false:true} className='sm'>
  <Container fluid>
  <Navbar.Brand as={Link} to='/' className='navbar-brand'>Movie-Gm</Navbar.Brand>
    <Navbar.Toggle aria-controls={useBreakpoint()==="sm"?"offcanvasNavbar":"responsive-navbar-nav"} />
    {useBreakpoint()==="sm"?<OffcanvasHeader />:<CollapseHeader />}
  </Container>
</Navbar>;
}

export default Header;
