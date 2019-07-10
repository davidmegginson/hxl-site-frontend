import React, { Component } from "react"
import { graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'
import Faq from '../components/faq'
import SEO from '../components/seo'


class PageTemplate extends Component {
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
              { page.acf.linkGroup && 
                <nav className='sidebar tertiary-nav' aria-labelledby="tertiary-navigation">
                  { page.acf.linkGroup.map((group, groupID) => {
                    return (
                      <ul key={groupID}>
                        { group.links.map((item, itemID) => {
                          let link = <a href={item.link.url}>{item.link.title}</a>;
                          if (itemID===0) {
                            link = (item.link.url==='#') ? <h3>{item.link.title}</h3> : <h3><a href={item.link.url}>{item.link.title}</a></h3>
                          }
                          return (
                            <li key={item.link.title}>{link}</li>
                          )
                        })}
                      </ul>
                    )
                  })}
                </nav>
              }
              <div className={page.acf.linkGroup ? 'main-content' : 'main-content full-width'}>
                <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
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

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      slug
      title
      content
      path
      acf{
        linkGroup{
          links{
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
  }
`