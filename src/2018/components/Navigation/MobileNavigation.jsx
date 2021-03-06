import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from '../../styles/components/nav.module.scss';
import classnames from 'classnames';
import navLogo from '../../assets/images/navLogo.svg';
import Clouds from './Clouds.jsx';

export class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: this.props.menuOpen
    };
  }

  openMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  onClick = () => {
    this.setState({ menuOpen: false });
  }

  render() {

    let menuActive;
    let mobileNav = this.state.menuOpen ? styles.mobileNav_Open : styles.mobileNav_Closed;
    if (this.state.menuOpen) {
      menuActive = 'is-active';
      // document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      menuActive = '';
      // document.body.style.overflow = 'unset'; need to figure out a better solution, should use context
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
    }

    return (
      <div>
        <nav className={classnames(styles.navContainer)}>
          <div className={classnames(styles.navElements, 'flex-justify-between', 'gridish-container--complete')}>
            <Link
              to="/2018/"
              onClick={this.onClick.bind(this)}
            >
              <img
                className={classnames(styles.logo, styles.navElement)}
                src={navLogo}
              />
            </Link>
            {/* <button className={classnames(styles.mobileRegisterButton)}>
              <a
                href="https://thoughtatwork.cias.rit.edu/register.php"
                onClick={this.onClick.bind(this)}
                className={classnames(styles.registerButtonText)}
                target="_blank"
              >
                get tickets
              </a>
            </button> */}
            <button
              className={classnames(
                styles.menu,
                styles.navElement,
                'hamburger hamburger--elastic',
                menuActive,
              )}
              type='button'
              aria-label='Menu'
              aria-controls='navigation'
              onClick={this.openMenu.bind(this)}
            >
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
          </div>
        </nav>
        <div className={classnames(mobileNav)}>
          <Clouds />
          <div className={classnames(styles.mobileNav_Open_Container, 'flex-align-center')}>
            <Link
              to="/2018/"
              onClick={this.onClick.bind(this)}
              className={classnames(styles.link, styles.navElement)}
              activeStyle={{
                color: '#FF2350'
              }}
            >
              Home
            </Link>
            <Link
              to="/2018/speakers"
              onClick={this.onClick.bind(this)}
              className={classnames(styles.link, styles.navElement)}
              activeStyle={{
                color: '#FF2350'
              }}
            >
              Speakers
            </Link>
            <Link
              to="/2018/schedule"
              onClick={this.onClick.bind(this)}
              className={classnames(styles.link, styles.navElement)}
              activeStyle={{
                color: '#FF2350'
              }}
            >
              Schedule
            </Link>

            <Link
              to="/2018/info"
              onClick={this.onClick.bind(this)}
              className={classnames(styles.link, styles.navElement)}
              activeStyle={{
                color: '#FF2350'
              }}
            >
              Info
            </Link>
            <Link
              to="/2018/about"
              onClick={this.onClick.bind(this)}
              className={classnames(styles.link, styles.navElement)}
              activeStyle={{
                color: '#FF2350'
              }}
            >
              about
            </Link>
          </div>
        </div>
      </div>);
  }
}

export default MobileNavigation;