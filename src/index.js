import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';

import config from '../config.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({
      key: config.API_KEY,
      term: 'surfboards'
    }, (videos) => {
      this.setState({ videos })
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
