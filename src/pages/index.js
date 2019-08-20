import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { withMixpanel } from 'gatsby-plugin-mixpanel'

import Header from '../components/header'
import Footer from '../components/footer'
import Organizations from '../components/organizations'
//import Testimonials from '../components/testimonials'
import SEO from '../components/seo'

import { getStaticImages } from '../scripts/helpers.js'


class Home extends Component {
  componentDidMount() {
    const { mixpanel } = this.props;
    var mixpanelTrackData = {
      'page title': 'The Humanitarian Exchange Language',
      'page type': 'home'
    };
    mixpanel.track('page view', mixpanelTrackData);

    //replace wp images with static images
    var listOfStaticImages = this.props.data.allWordpressWpMedia.edges;
    var images = document.getElementsByTagName('img');
    getStaticImages(images, listOfStaticImages);
  }

  render() {
    return (
      <React.Fragment>
        <SEO
          title={'Home'}
        />
        <div className='wrapper'>
          <Header />
          <section className='hero'>
            <div className='grid-container'>
              <div className='hero__inner'>
                <h1 className='special'>The Humanitarian Exchange Language</h1>
                <h3>{this.props.data.wordpressSiteMetadata.description}</h3>
              </div>
            </div>
          </section>

          <section className='tutorial background-gray'>
            <h2 className='center'>The 30-second HXL Tutorial</h2>
            <div className='grid-container'>
              <div className='col-4 tutorial__step'>
                <img src='./images/tutorial-1.png' alt='' />
                <h3 className='type__color-coral'><div className='bullet--number'><span>1</span></div>Grab a spreadsheet of humanitarian data</h3>
              </div>
              <div className='col-4 tutorial__step'>
                <img src='./images/tutorial-2.png' alt='' />
                <h3 className='type__color-coral'><div className='bullet--number'><span>2</span></div>Insert a new row between the headers and the data</h3>
              </div>
              <div className='col-4 tutorial__step'>
                <img src='./images/tutorial-3.png' alt='' />
                <h3 className='type__color-coral'><div className='bullet--number'><span>3</span></div>Add some HXL hashtags</h3>
              </div>
            </div>
            <div className='center'>
              <p className='small'>Not sure which HXL hashtag to use? See <a href='/standard/1-1final/dictionary/' aria-label='HXL Dictionary'>HXL hashtags in action classifying datasets</a>.<br/>Then, HXLate your own spreadsheets.</p>
              <a href='./how-it-works/' className='btn btn--primary' aria-label='How it works'>See how it works</a>
            </div>
          </section>

          {/*<section className='background-gray'>
            <h2 className='center'>What people are saying</h2>
            <Testimonials />
          </section>*/}

          <section className='background-gray padding-bottom'>
            <h2 className='center'>Organisations that use HXL</h2>
            <Organizations />
          </section>

          <Footer hasCTA={false} />
        </div>
      </React.Fragment>
    )
  }
}

export default withMixpanel()(Home)

export const pageQuery = graphql`
  query {
    wordpressSiteMetadata {
      description
    }
    allWordpressWpMedia {
      edges {
        node {
          source_url
          localFile {
            childImageSharp {
              sizes {
                src
                originalImg
              }
            } 
          }
        }
      }
    }
  }
`