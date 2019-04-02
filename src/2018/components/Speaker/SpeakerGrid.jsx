import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SpeakerCards from './SpeakerCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerGrid.module.scss';

export default class Speaker extends Component {
  render() {
    return (
      <div>
        <h3 className={classnames('container flex gridish-container gridish-container--complete gridish-grid')}>Click on the speakers to find out more.</h3>
        <div className={classnames('content-Block--margin-top container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>
          <StaticQuery
            query={SPEAKERS_2018_QUERY}
            render={({ allMarkdownRemark }) =>
              (
                <React.Fragment>
                  {
                    allMarkdownRemark.edges.map(speaker => (
                      <div className={classnames(styles.speakerSizing)} key={speaker.node.frontmatter.headshot}>
                        <SpeakerCards
                          name={speaker.node.frontmatter.title}
                          job={speaker.node.frontmatter.job}
                          bio={speaker.node.frontmatter.bio}
                          webpage={speaker.node.frontmatter.webpage}
                          headshot={ speaker.node.frontmatter.headshot}
                        />
                      </div>
                    ))
                  }
                </React.Fragment>
              )
            }
          />
        </div>
      </div>
    );
  }
}

const SPEAKERS_2018_QUERY = graphql`
  query speakers2018 {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/2018/speakers/" } }) {
      edges {
        node {
          frontmatter {
            title
            headshot
            job
            webpage
            bio
          }
        }
      }
    }
  }`;
