import React, { Component } from 'react';


import axios from 'axios';

import PicList from './Photos/PicList';

import apiKey from '../config.js';


class Container extends Component {


  constructor() {

    super();
    this.state = {
      photos: [],
      loading: true,
      query: ''
    };
  }


  componentDidMount() {

this.performSearch(this.props.query);

}

componentWillReceiveProps(nextProps) {
  this.setState({ query: nextProps.query,
  loading:true
});

  this.performSearch(nextProps.query);
}

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
