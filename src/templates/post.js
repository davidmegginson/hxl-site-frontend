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
            { post.acf.linkGroup && 
              <nav className='sidebar tertiary-nav' aria-labelledby="tertiary-navigation">
                { post.acf.linkGroup.map((group, groupID) => {
                  return (
                    <ul key={groupID}>
                      { group.links.map((item, itemID) => {
                        let link = <a href={item.link.url}>{item.link.title}</a>;
                        if (itemID===0) {
                          link = (item.link.url==='#') ? <h5>{item.link.title}</h5> : <h5><a href={item.link.url}>{item.link.title}</a></h5>
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
            <div className={post.acf.linkGroup ? 'main-content' : 'main-content full-width'}>
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