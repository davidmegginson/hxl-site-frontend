import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import AccordionComponent from '../components/accordion'
import {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


const FAQ = ({ data }) => (
  <div id="faq">
    <h3>FAQ subheader</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a></p>
                
    <AccordionComponent>
      { data.allWordpressWpFaq.edges.map((item) => {
        return (
          <AccordionItem key={item.node.slug}>
            <AccordionItemTitle>
              <h3>{item.node.title}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>{parse(item.node.acf.answer)}</p>
            </AccordionItemBody>
          </AccordionItem>
        )
      })}
    </AccordionComponent>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpFaq{
          edges{
            node{
              slug
              title
              acf{
                answer
              }
            }
          }
        }
      }
    `}
    render={data => <FAQ data={data} {...props} />}
  />
)