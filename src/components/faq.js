import React, { Component }  from 'react'
import { StaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import AccordionComponent from '../components/accordion'
import {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


class FAQ extends Component{ 
  render() {

    return(
      <StaticQuery
        query={faqQuery}
        render={data => {

          let faqGroups = {};
          data.allWordpressWpFaq.edges.map((item) => {
            let obj = {
              slug: item.node.slug,
              question: item.node.title,
              answer: parse(item.node.acf.answer)
            };
            let group = item.node.acf.faq_group;
            if (faqGroups[group]===undefined) {
              faqGroups[group] = new Array();
            }
            faqGroups[group].push(obj);
          })

          //sort group names 
          let groupNames = [];
          Object.keys(faqGroups).map(group => {
            groupNames.push(group);
          });
          groupNames.sort();

          return (
            <div id="faq">
              <h2>FAQ</h2>
              {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a></p>*/}
              
              {
                groupNames.map((group, index) => {
                  return (
                    <React.Fragment key={index}>
                      <h3>{group}</h3>
                      <AccordionComponent>
                      {
                        faqGroups[group].map((item) => {
                          return (
                            <AccordionItem key={item.slug}>
                              <AccordionItemTitle>
                                <h3>{item.question}</h3>
                              </AccordionItemTitle>
                              <AccordionItemBody>
                                <p>{item.answer}</p>
                              </AccordionItemBody>
                            </AccordionItem>
                          )
                        })
                      }
                      </AccordionComponent>
                    </React.Fragment>
                  )
                })
              }
            </div>
          )
        }}
      />
    )
  }
}

const faqQuery = graphql`
  query {
    allWordpressWpFaq{
      edges{
        node{
          slug
          title
          acf{
            answer
            faq_group
          }
        }
      }
    }
  }
`

export default FAQ