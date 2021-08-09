import './App.css';
import apiKey from './config.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
