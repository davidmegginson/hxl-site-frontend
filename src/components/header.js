import React, { Component }  from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import OCHAHeader from '../components/ochaheader'
import logo from '../assets/images/logo-hxl.svg'

class Header extends Component{
  constructor(){
    super();
    this.mobileNavRef = React.createRef();
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.state = { mobileNavOpen: false };
  }

  toggleMobileNav(){
    this.setState({mobileNavOpen: !this.state.mobileNavOpen});
  }

  render() {
    return (
      <StaticQuery
        query={menuQuery}
        render={data => {
          return (
            <header>
              <OCHAHeader />
              <div className='primary-nav'>
                <div className='grid-container center--vertical'>
                  <Link to={'/'} className='logo'><img src={logo} alt='HXL logo' /></Link>
                  <nav aria-labelledby='primary-navigation' ref={this.mobileNavRef} className={this.state.mobileNavOpen ? 'active' : ''}>
                    { data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) => (
                       <Link to={item.url} key={item.title}>{item.title}</Link>
                    ))}   
                  </nav>
                </div>
              </div>
              <button type='button' className='mobile-nav-toggle collapsed' onClick={this.toggleMobileNav}><span className='icon-bar'></span><span className='icon-bar'></span></button>
              <div className='secondary-nav'>
                <div className='grid-container center--vertical'>
                  <nav className='breadcrumbs' aria-labelledby="secondary-navigation">
                    <Link to={'/'}>HXL Home</Link>
                    { this.props.page && 
                      <a className='active'>{this.props.page}</a>
                    }
                  </nav>
                </div>
              </div>
            </header>
          )
        }}
      />
    )
  }
}

const menuQuery = graphql`
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
`

export default Header;