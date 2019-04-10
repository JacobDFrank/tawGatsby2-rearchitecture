import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AboutCards from './AboutCards.jsx';
import classnames from 'classnames';
import styles from '../../styles/components/about/aboutGrid.module.scss';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      end: true,
      used: -1,
      randomOrderLead: [],
    };
  }



  randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));

  generateRan = (max) => {
    let random = [];
    let used = this.state.used;
    if (this.state.end) {
      for (let i = 0; i < max; i++) {
        let temp = Math.floor(Math.random() * max + 1);
        if (random.indexOf(temp) == -1) {
          random.push(temp);
        }
        else i--;
      }
      this.setState({ end: false, randomOrderLead: random });
    }
    used++;
    return this.state.randomOrderLead[used];
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    if (this.state.count != this.state.end) {
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
                    someEntries.edges.map(person => (
                      <div className={classnames(styles.speakerSizing)} key={person.node.frontmatter.name}>
                        <AboutCards
                          name={person.node.frontmatter.name}
                          headshot={person.node.frontmatter.headshot}
                          role={person.node.frontmatter.role}
                          year={person.node.frontmatter.year}
                          major={person.node.frontmatter.major}
                          webpage={person.node.frontmatter.webpage}
                          // order={
                          //   this.generateRan(someEntries.edges.length)
                          // }
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