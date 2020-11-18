import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Organizations = ({ data }) => (
  <div className='grid-container'>
    { data.allWordpressWpOrganization.edges.map((item) => {
      // let logo = (item.node.featured_media) ? item.node.featured_media.source_url : null;
      let logo = (item.node.featured_media) ? item.node.featured_media.localFile.childImageSharp.fluid.src : null;
      return (
        <div className='col-3 blurb' key={item.node.slug}>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='org'>
            <h4>{item.node.title}</h4>
            <h5><a href={item.node.acf.hdxurl} className='external' target='_blank' rel='noopener noreferrer'>See HXLated dataset on HDX</a></h5>
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
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
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