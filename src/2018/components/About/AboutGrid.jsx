import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AboutCards from './AboutCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutGrid.module.scss';


export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 2,
      count: 0
    };
  }


  shuffleArray = (array) => {
    let i = array.length - 1;
    if (this.state.count != this.state.limit) {
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return array;
  }

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
                    this.shuffleArray(someEntries.edges).map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.frontmatter.name}>
                        <AboutCards
                          name={person.node.frontmatter.name}
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
                    this.shuffleArray(someMoreEntries.edges).map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.frontmatter.name}>
                        <AboutCards
                          name={person.node.frontmatter.name}
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
  someEntries:allMarkdownRemark(filter: {frontmatter: {lead: {ne: false}}, fileAbsolutePath: {regex: "/2018/team/"}}) {
    edges {
      node {
        frontmatter {
          name
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
  someMoreEntries: allMarkdownRemark(filter: {frontmatter: {lead: {ne: true}}, fileAbsolutePath: {regex: "/2018/team/"}}) {
    edges {
      node {
        frontmatter {
          name
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