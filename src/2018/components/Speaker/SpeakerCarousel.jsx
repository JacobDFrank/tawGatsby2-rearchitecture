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
            render={({ allMarkdownRemark }) =>
              (
                <div className={classnames('flex')}>
                  {
                    allMarkdownRemark.edges.map(speaker => (
                      <div className={classnames(styles.speakerCard, styles.speaker_lineup__padding)}
                        key={speaker.node.frontmatter.name}>
                        <SpeakerPhoto
                          name={speaker.node.frontmatter.name}
                          job={speaker.node.frontmatter.job}
                          bio={speaker.node.frontmatter.bio}
                          webpage={speaker.node.frontmatter.webpage}
                          headshot={speaker.node.frontmatter.headshot}
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/2018/speakers/" } }) {
      edges {
        node {
          frontmatter {
            name
            headshot
            job
            webpage
            bio
          }
        }
      }
    }
  }`;