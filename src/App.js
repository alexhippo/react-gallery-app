import React, { Component } from 'react';
import apiKey from './config.js';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
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
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const currentPathname = this.props.location.pathname;
    if (this.isCurrentPathnameValid(currentPathname)) {
      this.performSearch(this.getSearchTermFromPathname(currentPathname));
    }
  }

  componentDidUpdate(prevProps) {
    const currentPathname = this.props.location.pathname;
    if (currentPathname !== prevProps.location.pathname) {
      if (this.isCurrentPathnameValid(currentPathname)) {
        this.performSearch(this.getSearchTermFromPathname(currentPathname));
      }
    }
  }

  /**
   * Gets the search term from the current url pathname
   * @param {String} pathname - The current url path e.g. /munchkin-cats
   * @returns {String} searchTerm - the search term e.g. "munchkin cats"
   */
  getSearchTermFromPathname(pathname) {
    let searchTerm = pathname.replace(/[//-]+/g, ' ').trim();
    if (!searchTerm.includes('search')) {
      return searchTerm;
    } else {
      searchTerm = searchTerm.replace('search', ' ').trim();
      return searchTerm;
    }
  }

  /**
   * Determine whether the current URL pathname is valid for searching.
   * A "valid" pathname is something like /scottish-fold-cats, but not /page-not-found
   * If invalid - a 404 Page Not Found error is displayed
   * @param {String} pathname - The current url path
   * @returns {Boolean} - Whether the current pathname is valid for searching
   */
  isCurrentPathnameValid(pathname) {
    return ((pathname.includes('search')) ||
      (pathname === '/munchkin-cats') ||
      (pathname === '/scottish-fold-cats') ||
      (pathname === '/british-short-hair-cats'))
  }

  /**
   * Fetch photos from Flickr Photo Search API to display in the gallery
   * @param {String} query - query to search for, e.g. 'cats'
   */
  performSearch(tags = 'cats') {
    this.setState({
      loading: true
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          error: null
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
        this.setState({
          error: `Sorry, something went wrong. Please try again later.`
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/munchkin-cats" />
          </Route>
          <Route path="/munchkin-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              loading={this.state.loading}
              title={'Munchkin Cats'}
              error={this.state.error}
            />}
          />
          <Route path="/scottish-fold-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              loading={this.state.loading}
              title={'Scottish Fold Cats'}
              error={this.state.error}
            />}
          />
          <Route path="/british-short-hair-cats" component={() =>
            <PhotoContainer
              data={this.state.photos}
              loading={this.state.loading}
              title={'British Short Hair Cats'}
              error={this.state.error}
            />}
          />
          <Route exact path="/search/:query" component={() =>
            <PhotoContainer
              data={this.state.photos}
              loading={this.state.loading}
              title={`${this.getSearchTermFromPathname(this.props.location.pathname)}`}
              error={this.state.error}
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