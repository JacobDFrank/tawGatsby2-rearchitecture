import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/home/homeModalContainer.module.scss';
import HomeModal from './HomeModal';
import modal_closeButton from '../../assets/homeModal/modal_closeButton.svg';
import { css } from '@emotion/core';

const modal_closeButton__size = css`
  width: 24px;
`;

export default class SpeakerCard extends Component {
  constructor(props) {
    super(props);

    this.addModalClick = this.addModalClick.bind(this);
    this.removeModalClick = this.removeModalClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.escFunction = this.escFunction.bind(this);

    this.state = {
      popupVisible: true,
    };
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.removeModalClick();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  addModalClick() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  }

  removeModalClick() {
    console.log('removed');
    this.setState({
      popupVisible: false
    });
    document.body.style.overflow = 'unset';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    document.body.style.height = 'auto';
    document.getElementsByClassName('home_modal__background')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName('home_modal__background')[0].style.zIndex = '0';
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <div className='home_modal__background'>
        <div>
          {this.state.popupVisible && (
            <div>
              <div className={classnames(styles.modal_container__inner, 'gridish-container')}>
                <div className={classnames(styles.modal_container__outer)}>
                  <div className={classnames(styles.navContainer_content, 'flex flex-justify-end')}>
                    <button
                      className={classnames(
                        'hamburger hamburger--elastic is-active',
                      )}
                      type='button'
                      aria-label='Menu'
                      aria-controls='navigation'
                    >
                      <img css={modal_closeButton__size} src={modal_closeButton} onClick={this.removeModalClick}></img>
                    </button>
                  </div>
                  <HomeModal />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
