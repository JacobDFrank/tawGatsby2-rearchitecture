import React, { Component } from 'react';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import modal_coverImage from '../../assets/homeModal/modal_coverImage.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import styles from '../../styles/components/home/homeModal.module.scss';

const ModalTitle = styled('h3')`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: normal;
  letter-spacing: 0.01em;
  text-transform: none;
`;

const innerModalContent__Margin = css`
  margin: 0 16%;
`;

const modal__Image = css`
  width: 74%;
  padding-top: 24px;
  padding-bottom: 48px;
  @media (min-width: 480px) {
    padding-bottom: 32px;
  }
  `;

const ModalContent = styled('p')`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;
  a {
    font-size: 16px;
    cursor:pointer;
  }
`;

const ModalButton__Text = styled('p')`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 25px;
letter-spacing: 0.03em;
`;


export default class SpeakerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (

      <div className={classnames('gridish-grid')}>
        <div css={innerModalContent__Margin}>
          <div className={('flex flex-justify-start')}>
            <ModalTitle>Get Ready for Thought At Work!</ModalTitle>
          </div>
          <img src={modal_coverImage} css={modal__Image} />
          <p
            className={classnames('flex-row')}
          >
            <ModalContent>
              Thought at Work Conference 2019 is in the works. Stay tuned for more events and updates!
            </ModalContent>
            <br></br>
            <ModalContent>
              Interested in volunteering? Thought at Work meets every Sunday at 3pm in <a href="https://goo.gl/maps/3rDy8BZxKQV8gNzKA">Booth 4426</a>.
            </ModalContent>
          </p>
          <div
            onClick={this.addModalClick}
            className={classnames(styles.modal_button__size, styles.modal_button, 'flex flex-justify-center flex-align-center')}
          >
            <ModalButton__Text>Explore last year's site</ModalButton__Text>
          </div>
        </div>
      </div>
    );
  }
}
