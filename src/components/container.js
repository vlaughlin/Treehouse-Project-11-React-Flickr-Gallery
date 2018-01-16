import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
   super();
   this.state = {
   pics: []


   };
 }

 componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          pics: response.data.pics.pic,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
