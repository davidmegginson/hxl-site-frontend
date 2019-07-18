import React, { Component } from "react"
import { graphql } from 'gatsby'

import Header from '../components/header'
import Sidenav from '../components/sidenav'
import Footer from '../components/footer'
import SEO from '../components/seo'


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <React.Fragment>
        <SEO
          title={post.title}
        />
        <div className='wrapper'>
          <Header page={post.title} />
          <div className='viewport-container'>
            <div className='grid-container'>
              {
                post.acf.linkGroup && <Sidenav links={post.acf.linkGroup} />
              }
              
              <div className={post.acf.linkGroup ? 'main-content' : 'main-content full-width'}>
          			<h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          			<div dangerouslySetInnerHTML={{ __html: post.content }} />
          		</div>
          	</div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}


export default PostTemplate

export const postQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
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
  }
`
