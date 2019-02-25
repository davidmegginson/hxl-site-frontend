import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Header = ({ data }) => (
  <header>
    <div className='primary-nav'>
      <div className='grid-container center--vertical'>
        <a href='/' className='logo'><img src='./images/logo-hxl.svg' alt='' /></a>
        <nav aria-labelledby="primary-navigation">
          { data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) => (
            <a href={item.url} key={item.title}>{item.title}</a>
          ))}   
        </nav>
      </div>
    </div>
    <button type='button' className='mobile-nav-toggle collapsed'><span className='icon-bar'></span><span className='icon-bar'></span></button>
    <div className='secondary-nav'>
      <div className='grid-container center--vertical'>
        <nav className='breadcrumbs' aria-labelledby="secondary-navigation">
          <a href='/'>HXL Home</a>
          <a href='/' className='active'>How it Works</a>
        </nav>
      </div>
    </div>
  </header>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                title
                url
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)