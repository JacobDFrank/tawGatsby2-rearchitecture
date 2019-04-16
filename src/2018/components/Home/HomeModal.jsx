import React, { Component } from 'react';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import modal_coverImage from '../../assets/homeModal/modal_coverImage.svg';
import styled from '@emotion/styled';

const ModalTitle = styled('h3')`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: normal;
  letter-spacing: 0.01em;
  text-transform: none;
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
        <div className={('flex flex-justify-between')}>
          <ModalTitle>Get Ready for Thought At Work!</ModalTitle>
        </div>
        <p
          className={classnames('flex-row')}
        >
          {'props.bio'}
        </p>
      </div>
    );
  }
}
