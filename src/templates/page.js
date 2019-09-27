import React, { Component } from "react"
import { graphql } from 'gatsby'
import { withMixpanel } from 'gatsby-plugin-mixpanel'

import Header from '../components/header'
import Sidenav from '../components/sidenav'
import Footer from '../components/footer'
import Faq from '../components/faq'
import SEO from '../components/seo'

import { getStaticImages, getStaticPDFs } from '../scripts/helpers.js'

import hxlDemo from '../assets/images/hxl_demo.gif'

class PageTemplate extends Component {
  componentDidMount() {
    const { mixpanel } = this.props;
    var mixpanelTrackData = {
      'page title': this.props.data.wordpressPage.title,
      'page type': 'page'
    };
    mixpanel.track('page view', mixpanelTrackData);

    //replace wp images with static images
    var listOfStaticImages = this.props.data.allWordpressWpMedia.edges;
    var images = document.getElementsByTagName('img');
    getStaticImages(images, listOfStaticImages);

    var pdfList = this.props.data.allFile.edges;
    var files = document.getElementsByTagName('a');
    getStaticPDFs(files, pdfList);
  }

  render() {
    const page = this.props.data.wordpressPage;

    return (
      <React.Fragment>
        <SEO
          title={page.title}
        />
        <div className='wrapper'>
          <Header page={page} />
          <div className='viewport-container'>
            <div className='grid-container'>
              {
                page.acf.linkGroup && <Sidenav links={page.acf.linkGroup} />
              }

              <div className={page.acf.linkGroup ? 'main-content' : 'main-content full-width'}>
                <h1 dangerouslySetInnerHTML={{ __html: page.title }} />

                { /* animated gif for HXL demo */
                  page.slug==='how-it-works' &&
                    <figure id='fig.tagging'>
                      <figure><img src={hxlDemo} alt='HXL Demo' width='800' /></figure>
                      <figcaption>Figure 1: Adding a row of HXL hashtags to an existing dataset.</figcaption>
                    </figure>
                }
                
                <div dangerouslySetInnerHTML={{ __html: page.content }} />

                {
                  page.slug==='how-it-works' && <Faq/>
                }
              </div>
            </div>
          </div>
          <Footer />
        </div>

      </React.Fragment>
    )
  }
}

export default withMixpanel()(PageTemplate)

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      slug
      title
      content
      path
      acf{
        linkGroup {
          links {
            link {
              title
              url
              target
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
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
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`