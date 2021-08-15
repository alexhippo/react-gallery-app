import React, { Component } from 'react';
import './App.css';
import apiKey from './config.js';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.performSearch();
    } else {
      this.performSearch(this.getSearchTermFromPathname(this.props.location.pathname));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.performSearch(this.getSearchTermFromPathname(this.props.location.pathname));
    }
  }

  getSearchTermFromPathname(pathname) {
    let searchTerm = pathname.replace(/[^A-Za-z0-9]+/g, ' ').trim();
    return searchTerm;
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <PhotoContainer data={this.state.photos} />} />
          <Route path="/munchkin-cats" component={() => <PhotoContainer data={this.state.photos} />} />
          <Route path="/scottish-fold-cats" component={() => <PhotoContainer data={this.state.photos} />} />
          <Route path="/british-short-hair-cats" component={() => <PhotoContainer data={this.state.photos} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);