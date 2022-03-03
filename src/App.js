import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DataDetailsFetching from './hooks/DataDetailsFetching';
import BasePage from './PublicPages/BasePage';
import Footer from './PublicPages/Components/Footer';
import Header from './PublicPages/Components/Header';
import PeoplePage from './PublicPages/PeoplePage';
import SearchListing from './PublicPages/SearchListing';
import ShowsPage from './PublicPages/ShowsPage';
import './sass/main.scss'

function App() {
  return <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<BasePage/>}/>
      <Route path='/shows' element={<ShowsPage/>}/>
      <Route path='/shows/:id' element={<DataDetailsFetching/>}/>
      <Route path='/people' element={<PeoplePage/>}/>
      <Route path='/people/:id' element={<DataDetailsFetching/>}/>
      <Route path='/search/:query' element={<SearchListing/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default App;
