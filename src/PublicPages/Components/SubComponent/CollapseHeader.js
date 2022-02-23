import {Navbar} from 'react-bootstrap'
import LinksHeader from '../../../hooks/LinksHeader';

function CollapseHeader() {
  return <Navbar.Collapse id="navbarScroll">
  <LinksHeader navData={'me-auto my-2 my-lg-0'}/>
</Navbar.Collapse>;
}

export default CollapseHeader;
