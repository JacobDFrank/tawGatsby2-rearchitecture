import React, { Component } from 'react';
import HomeSpeakers from './HomeSpeakers';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeSplash from './HomeSplash';
import HomeModalContainer from './HomeModalContainer';

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeModalContainer />
        <HomeSplash/>
        <HomeAbout/>
        <HomeSpeakers/>
        <HomeVideo/>
      </React.Fragment>
    );
  }
}
