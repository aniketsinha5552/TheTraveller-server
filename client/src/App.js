
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Memory from './components/newMemory/Memory';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route exact path='/' element={<Body/>}></Route>
        <Route path='/create' element={<Memory/>}></Route>
        </Routes>
      <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
