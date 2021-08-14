import React, { Component } from 'react';
import './App.css';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// App components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    //get the query from the url and perform
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" component={() => <PhotoContainer data={this.state.photos} />} />
            <Route path="/maine-coon-cats" component={() => <PhotoContainer onSearch={this.performSearch} searchTerm={'cats'} data={this.state.photos} />} />
            <Route path="/scottish-fold-cats" component={() => <PhotoContainer onSearch={this.performSearch} searchTerm={'cats'} data={this.state.photos} />} />
            <Route path="/british-short-hair-cats" component={() => <PhotoContainer onSearch={this.performSearch} searchTerm={'cats'} data={this.state.photos} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}