import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Organizations = ({ data }) => (
  <div className='grid-container'>
    { data.allWordpressWpOrganization.edges.map((item) => {
      let logo = (item.node.featured_media) ? item.node.featured_media.source_url : null;
      return (
        <div className='col-3 blurb' key={item.node.slug}>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='org'>
            <h5>{item.node.title}</h5>
            <h6><a href={item.node.acf.hdxurl} className='external' target='_blank' rel='noopener noreferrer'>See hxlated dataset on HDX</a></h6>
          </div>
        </div>
      )
    })} 
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpOrganization{
          edges{
            node{
              title
              slug
              featured_media{
                source_url
              }
              acf{
                hdxurl
              }
            }
          }
        }
      }
    `}
    render={data => <Organizations data={data} {...props} />}
  />
)