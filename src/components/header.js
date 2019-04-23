import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "../assets/images/logo-hxl.svg"

const Header = ({ data, page }) => (
  <header>
    <div className='primary-nav'>
      <div className='grid-container center--vertical'>
        <Link to={'/'} className='logo'><img src={logo} alt='HXL logo' /></Link>
        <nav aria-labelledby='primary-navigation'>
          { data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) => (
             <Link to={item.url} key={item.title}>{item.title}</Link>
          ))}   
        </nav>
      </div>
    </div>
    <button type='button' className='mobile-nav-toggle collapsed' onClick={function() {console.log('hey')}}><span className='icon-bar'></span><span className='icon-bar'></span></button>
    <div className='secondary-nav'>
      <div className='grid-container center--vertical'>
        <nav className='breadcrumbs' aria-labelledby="secondary-navigation">
          <Link to={'/'}>HXL Home</Link>
          { page && 
            <a className='active'>{page}</a>
          }
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