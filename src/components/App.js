import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer />
          </div>
          <div className="col-md-5">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}