import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ShowsComponent from './Components/ShowsComponent';

function ShowsPage() {
  return (
    <div className='container pt-3 '>
        <Breadcrumb className='mb-3'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shows</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className='mb-2'>Shows</h2>
        <ShowsComponent/>
    </div>
  )
}

export default ShowsPage