import React, { Component } from 'react';
import './App.css';
import apiKey from './config.js';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const currentPathname = this.props.location.pathname;
    if (currentPathname === "/") {
      this.performSearch();
    } else {
      if (this.isCurrentPathnameValid(currentPathname)) {
        this.performSearch(this.getSearchTermFromPathname(currentPathname));
      }
    }
  }

  componentDidUpdate(prevProps) {
    const currentPathname = this.props.location.pathname;
    if (currentPathname !== prevProps.location.pathname) {
      if (currentPathname === '/') {
        this.performSearch();
      } else {
        if (this.isCurrentPathnameValid(currentPathname)) {
          this.performSearch(this.getSearchTermFromPathname(currentPathname));
        }
      }
    }
  }

  getSearchTermFromPathname(pathname) {
    let searchTerm = pathname.replace(/[^A-Za-z0-9]+/g, ' ').trim();
    if (!searchTerm.includes('search')) {
      return searchTerm;
    } else {
      searchTerm = searchTerm.replace('search', ' ').trim();
      return searchTerm;
    }
  }

  isCurrentPathnameValid(pathname) {
    return (pathname.includes('search') ||
      pathname.includes('munchkin-cats') ||
      pathname.includes('scottish-fold-cats') ||
      pathname.includes('british-short-hair-cats'))
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
          <Route exact path="/" component={() =>
            <PhotoContainer
              data={this.state.photos}
              title={'Cats Results'}
            />}
          />
          <Route path="/munchkin-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              title={'Munchkin Cats Results'}
            />}
          />
          <Route path="/scottish-fold-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              title={'Scottish Fold Cats Results'}
            />}
          />
          <Route path="/british-short-hair-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              title={'British Short Hair Cats Results'}
            />}
          />
          <Route exact path="/search/:query" component={() =>
            <PhotoContainer
              data={this.state.photos}
              title={`${this.getSearchTermFromPathname(this.props.location.pathname)} Results`}
            />}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);