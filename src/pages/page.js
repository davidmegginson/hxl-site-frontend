import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import AccordionComponent from '../components/accordion'
import {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


import cta from "../assets/images/call-to-action.png"
import postcard from "../assets/images/hxl-postcards.png"

export default ({ data }) => {
  return (
    <React.Fragment>
      <Header page={'How it works'} />
        <div className='viewport-container'>
          <div className='grid-container'>
            <nav className='sidebar tertiary-nav' aria-labelledby='tertiary-navigation'>
              <ul>
                <li><h5><a href='/'>Jump link 1</a></h5></li>
                <li><a href='/'>Jump link 2</a></li>
                <li><a href='/'>Jump link 3</a></li>
              </ul>
              <ul>
                <li><h5><a href='/'>Jump link 1</a></h5></li>
                <li><a href='/'>Jump link 2</a></li>
                <li><a href='/'>Jump link 3</a></li>
              </ul>
              <ul>
                <li><h5>Header</h5></li>
                <li><a href='/'>link 1</a></li>
                <li><a href='/'>link 2</a></li>
              </ul>
              <button className='btn btn--secondary'>Open HXL Tag Assist</button>
            </nav>
            <div className='main-content'>
              <h3>How it works</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              </p>

              <h4>Header 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              </p>

              <h5>HXL Postcards</h5>
              <div className='grid-container'>
                <div className='col-7'>
                  <img src={postcard} width='100%' alt='HXL Postcards' />
                </div>
                <div className='col-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                  <p><a href='/'>Download [25.7kb]</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href='/'>View</a></p>
                </div>
              </div>

              <h5>FAQ subheader</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href='/'>minim veniam</a></p>
              
              <AccordionComponent>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>We define humanitarian data as:<br/>data about the context in which a humanitarian crisis is occurring (e.g., baseline/development data, damage assessments, geospatial data) data about the people affected by the crisis and their needs data about the response by organisations and people seeking to help those who need assistance.</p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?</h5>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>We define humanitarian data as:<br/>data about the context in which a humanitarian crisis is occurring (e.g., baseline/development data, damage assessments, geospatial data) data about the people affected by the crisis and their needs data about the response by organisations and people seeking to help those who need assistance.</p>
                  </AccordionItemBody>
                </AccordionItem>
              </AccordionComponent>
            </div>
          </div>

          <section className='call-to-action'>
            <div className='grid-container center--vertical'>
              <div className='col-7'>
                <h5>Ready to try using HXL tags?</h5>
                <h3>Call to action call to action</h3>
                <button className='btn btn--secondary'>Sign up for demo</button>
              </div>
              <div className='col-5'>
                <img src={cta} width='400' alt='CTA' />
              </div>
            </div>
          </section>
        </div>
      <Footer />
    </React.Fragment>
  )
}

