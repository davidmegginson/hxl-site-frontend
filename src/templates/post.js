import React, { Component } from "react"
import { graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <Header page={post.title} />
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

        			<h3 dangerouslySetInnerHTML={{ __html: post.title }} />
        			<div dangerouslySetInnerHTML={{ __html: post.content }} />

        		</div>
        	</div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default PostTemplate

export const postQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`