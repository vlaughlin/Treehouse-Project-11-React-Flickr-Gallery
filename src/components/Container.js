import React, { Component } from 'react';


import axios from 'axios';

import PicList from './Photos/PicList';

import apiKey from '../config.js';


class Container extends Component {

/* Defined an initial state inside a class using constructor. Super is called. this.state will have the Fickr img data that will be displayed. The photos sate represents a collection of objects
that will change and be updated by components*/

  constructor() {

    super();
    this.state = {
      photos: [],
      loading: true,
      query: ''
    };
  }

/* Data fetching is set inside componentDidMount Life Cycle Method // componentDidMount means: Immediately after the component is added to the DOM  */

  componentDidMount() {

this.performSearch(this.props.query);

}

componentWillReceiveProps(nextProps) {
  this.setState({ query: nextProps.query,
  loading:true
});
  this.performSearch(nextProps.query);
}

/*Fetching Data with Axios. The get method performs request.  The catch method will handle errors. performSearch fetches the data and updates the photos state when called*/

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

//Renders photo data and loading message
  render() {
console.log(this.state.photos);

    return (
          <div className="container">
              <div className="photo-container">
                {
                  (this.state.loading)
                    ? <p>Loading...</p>
                    : <PicList data={this.state.photos} query={this.state.query} />
                }
            </div>
          </div>
    );
  }
}

export default Container;
