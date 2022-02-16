import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BasePage from './PublicPages/BasePage';
import Header from './PublicPages/Components/Header';
import './sass/main.scss'

function App() {
  return <>
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<BasePage/>}/>
    </Routes>
  </Router>
  </>
}

export default App;
