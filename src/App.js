import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BasePage from './PublicPages/BasePage';
import Header from './PublicPages/Components/Header';
import PeoplePage from './PublicPages/PeoplePage';
import SearchListing from './PublicPages/SearchListing';
import DetailsPage from './PublicPages/DetailsPage';
import ShowsPage from './PublicPages/ShowsPage';
import './sass/main.scss'

function App() {
  return <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<BasePage/>}/>
      <Route path='/shows' element={<ShowsPage/>}/>
      <Route path='/shows/:id' element={<DetailsPage/>}/>
      <Route path='/people' element={<PeoplePage/>}/>
      <Route path='/people/:id' element={<DetailsPage/>}/>
      <Route path='/search/:query' element={<SearchListing/>}/>
    </Routes>
  </Router>
  </>
}

export default App;
