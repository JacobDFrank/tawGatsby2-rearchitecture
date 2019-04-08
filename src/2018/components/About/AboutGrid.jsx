import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AboutCards from './AboutCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutGrid.module.scss';


export default class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className={classnames(
          'container gridish-container gridish-container--complete', styles.coolKids)}>The cool kids</h3>
        <div className={classnames('container flex gridish-container gridish-container--complete gridish-grid', styles.flexibleGrid)}>

          <StaticQuery
            query={TEAM_2018_QUERY}
            render={({ someEntries, someMoreEntries }) =>
              (
                <React.Fragment>
                  {
                    someEntries.edges.map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.frontmatter.title}>
                        <AboutCards
                          title={person.node.frontmatter.title}
                          headshot={person.node.frontmatter.headshot}
                          role={person.node.frontmatter.role}
                          year={person.node.frontmatter.year}
                          major={person.node.frontmatter.major}
                          webpage={person.node.frontmatter.webpage}
                        />
                      </div>
                    ))
                  }
                  {
                    someMoreEntries.edges.map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.frontmatter.title}>
                        <AboutCards
                          title={person.node.frontmatter.title}
                          headshot={person.node.frontmatter.headshot}
                          role={person.node.frontmatter.role}
                          year={person.node.frontmatter.year}
                          major={person.node.frontmatter.major}
                          webpage={person.node.frontmatter.webpage}
                        />
                      </div>
                    ))
                  }
                </React.Fragment>
              )
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

const TEAM_2018_QUERY = graphql`
  query team2018 {
  someEntries:allMarkdownRemark(filter: {frontmatter: {lead: {eq: true}, fileAbsolutePath: {regex: "/2018/team/"}}) {
    edges {
      node {
        frontmatter {
          title
          headshot
          role
          major
          year
          webpage
          lead
        }
      }
    }
  }
  someMoreEntries: allMarkdownRemark(filter: {frontmatter: {lead: {eq: false}}}, fileAbsolutePath: {regex: "/2018/team/"}}) {
    edges {
      node {
        frontmatter {
          title
          headshot
          role
          major
          year
          webpage
          lead
        }
      }
    }
  }
}
`;