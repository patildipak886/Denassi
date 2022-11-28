//import {useSelector} from 'react-redux';
import{BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import PlayList from './components/PlayList';
import Search from './components/Search';


function App() {
  return (
    <div className='App'>
    

     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search></Search>}/>
        <Route path="/PlayList" element={<PlayList/>}/>
        <Route path="/Favourites" element={<Favourites/>}/>
      </Routes>
      </BrowserRouter>
    
    
     </div>
   
  );
}

export default App;
