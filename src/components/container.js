

import React, { Component } from 'react';

// Set up axios to handle promise-based HTTP requests.
import axios from 'axios';

// Import Components used
import PhotoList from './Photos/PicList';

// Import API key - place your own config.js in the src folder to view photos
import apiKey from '../config.js';


class Container extends Component {

  // Constructor to define initial state which can be passed to Components via props
  constructor() {
    // Super allows the use of the keyword "this" inside the constructor with the context of App
    // photos initial state is an empty array which will be filled with photos from flickr
    // loading state is true which displays a "loading...' message which will change to false when the photos array has content
    // query set as an empty string
    super();
    this.state = {
      photos: [],
      loading: true,
      query: ''
    };
  }

  // Lifecycle method called immediately after a component is added to the DOM
    // axios is used to get photos  from Flickr, using a template literal that inserts an apiKey and the default "cats" search state from the SearchForm via props
    // The method uses the reponse data from Flickr to set the state of the photos array ...
    // ... and changes the loading state to false
    // In the event of an error fetching and parsing data, am error message is displayed
    componentDidMount() {

      this.performSearch();

     }

  // Receives Props from the the SearchForm Component so they can be used in the query state
  // And passes the query state to the performSearch function
  componentWillReceiveProps(nextProps) {
    this.setState({ query: nextProps.query });
    this.performSearch(nextProps.query);
  }

  // Lifecycle method that is called when a search is made in the SearchForm Component
  performSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // Renders container and photo-container divs to the DOM
    // Displays a loading message until the photo data is fetched, parsed and rendered to the DOM
    // The PhotoList is rendered with the photo data and query state passed to the Component via props
  render() {
    return (
          <div className="container">
              <div className="photo-container">
                {
                  (this.state.loading)
                    ? <p>Loading...</p>
                    : <PhotoList data={this.state.photos} query={this.state.query} />
                }
            </div>
          </div>
    );
  }
}

export default Container;
