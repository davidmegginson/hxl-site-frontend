import React, { Component } from "react"
import { graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

class PostTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage

    return (
      <div>
        <Header page={page.title} />
        <div className='viewport-container'>
          <div className='grid-container'>
            <nav className='sidebar tertiary-nav' aria-labelledby="tertiary-navigation">
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

              <h3 dangerouslySetInnerHTML={{ __html: page.title }} />
              <div dangerouslySetInnerHTML={{ __html: page.content }} />

            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`