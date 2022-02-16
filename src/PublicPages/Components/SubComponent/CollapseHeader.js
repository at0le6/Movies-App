import React from 'react';
import {Navbar} from 'react-bootstrap'
import LinksHeader from './Comon_FIles/LinksHeader';

function CollapseHeader({}) {
  return <Navbar.Collapse id="navbarScroll">
  <LinksHeader navData={'me-auto my-2 my-lg-0'}/>
</Navbar.Collapse>;
}

export default CollapseHeader;
