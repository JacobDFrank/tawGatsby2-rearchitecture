import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SpeakerPhoto from './SpeakerPhoto.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCarousel.module.scss';
import DragScroll from 'react-dragscroll';

export default class SpeakerCarousel extends Component {

  render() {
    return (
      <div>
        <DragScroll height={'unset'} width={'unset'} className={classnames(styles.speaker_lineup__Carousel, 'flex')}>
          <StaticQuery
            query={SPEAKERSCAROUSEL_2018_QUERY}
            render={({ allContentful2018Speakers }) =>
              (
                <div className={classnames('flex')}>
                  {
                    allContentful2018Speakers.edges.map(speaker => (
                      <div className={classnames(styles.speakerCard, styles.speaker_lineup__padding)}
                        key={speaker.node.speakerName}>
                        <SpeakerPhoto
                          name={speaker.node.speakerName}
                          job={speaker.node.job}
                          headshot={speaker.node.headshot.fluid}
                        />
                      </div>
                    ))
                  }
                </div>
              )
            }
          />
        </DragScroll>
      </div>
    );
  }
}

const SPEAKERSCAROUSEL_2018_QUERY = graphql`
  query speakersCarousel2018 {
    allContentful2018Speakers {
    totalCount
    edges {
			node
      {
        speakerName
        job
        headshot {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      }
    }
  }
  }`;