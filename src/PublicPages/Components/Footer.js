import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer mt-auto py-3 bg-dark'>
        <div className='container d-flex justify-content-between flex-nowrap'>
            <a href='https://github.com/at0le6/Movies-App' className='text-white'>Github</a>
            <Link to='/' className='text-white'>Movie-Gm</Link>
            <a href='https://www.tvmaze.com/api' className='text-white'>Api</a>
        </div>
    </footer>
  )
}

export default Footer