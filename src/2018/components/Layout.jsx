import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import '../../2018/styles/index.scss';
import classnames from 'classnames';
import Navigation from './Navigation';
import Footer from './Footer';
// import './2017/styles-2017.scss';
import polyPattern from '../assets/images/polyPattern.png';
import HomeModalContainer from './Home/HomeModalContainer';

const Layout = ({ children }) => (
  <StaticQuery
    // how would i make that regex dynamic???
    // https://www.leveluptutorials.com/tutorials/pro-gatsby-2/gatsby-image used this video for the code
    query={graphql`
      query SiteTitleQuery2018 {
        site {
          siteMetadata {
            siteMetadata2018 {
              title
              description
              author
            }
          }
        }
      }
    `}
    render={() =>
      (
        <React.Fragment>
          {location.pathname == '/2018/' && 
              <HomeModalContainer/>
          }
          <div className='speaker_modal__background'/>
          <div
            className={classnames('dotGrid_background__padding_top')}
            id="body-noScroll"

            style={
              {
                backgroundImage: `url(${polyPattern})`,
                backgroundPosition: '50% 0',
                backgroundRepeat: 'repeat',
              }
            }
          >
            <Navigation />
            {children}
            <Footer />
          </div>
        </React.Fragment>
      )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  location: {}
};

export default Layout;
