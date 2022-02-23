import {useState} from 'react';
import { Navbar,Offcanvas,Nav } from 'react-bootstrap'
import LinksHeader from '../../../hooks/LinksHeader';

function OffcanvasHeader() {
  return <Navbar.Offcanvas
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel"
  placement="end" 
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title id="offcanvasNavbarLabel">More Options</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body >
    <LinksHeader navData={'justify-content-end flex-grow-1 pe-3'} />
  </Offcanvas.Body>
</Navbar.Offcanvas>;
}

export default OffcanvasHeader;
