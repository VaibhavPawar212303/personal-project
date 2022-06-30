
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Allblog from './components/AllBlog';
import Onepost from './components/onepost';

function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/Allblog' element={<Allblog/>}></Route>
           <Route path='/:slug' element={<Onepost/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
