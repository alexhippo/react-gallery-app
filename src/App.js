import logo from './logo.svg';
import './App.css';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
