import React, { Component }  from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import OCHAHeader from '../components/ochaheader'
import logo from '../assets/images/logo-hxl.svg'

class Header extends Component{
  constructor(){
    super();
    this.mobileNavRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.state = { mobileNavOpen: false, mobileNavFixed: '' };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let isFixed = (window.pageYOffset >= 35) ? 'fixed' : '';
    this.setState({mobileNavFixed: isFixed});
  }

  toggleMobileNav(){
    this.setState({mobileNavOpen: !this.state.mobileNavOpen});
  }

  render() {
    let page = this.props.page;
    let parentPath = null;
    let parentSlug = null;

    //manually create breadcrumb for pages under 'specifications'
    if (page) {
      parentPath = page.path.substring(0, page.path.indexOf(page.slug));
      parentPath = (parentPath.length > 1 && parentPath !== '/standard/') ? parentPath : null;
      parentSlug = 'Specifications';
    }
    

    return (
      <StaticQuery
        query={menuQuery}
        render={data => {
          return (
            <header>
              <OCHAHeader />
              <div className={`primary-nav ${this.state.mobileNavFixed}`}>
                <div className='grid-container center--vertical'>
                  <Link to={'/'} className='logo'><img src={logo} alt='HXL logo' /></Link>
                  <nav aria-labelledby='primary-navigation' ref={this.mobileNavRef} className={this.state.mobileNavOpen ? 'active' : ''}>
                    { data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) => (
                       <Link to={item.url} key={item.title}>{item.title}</Link>
                    ))}   
                  </nav>
                </div>
                <button type='button' className='mobile-nav-toggle collapsed' onClick={this.toggleMobileNav} aria-label='Mobile Nav Toggle'>
                  <span className='icon-bar'></span><span className='icon-bar'></span>
                </button>
              </div>
              <div className='secondary-nav'>
                <div className='grid-container center--vertical'>
                  <nav className='breadcrumbs' aria-labelledby="secondary-navigation">
                    <Link to={'/'}>HXL Home</Link>
                    {
                      parentPath &&
                      <Link to={parentPath} key={parentSlug}>{parentSlug}</Link>
                    }
                    { page && 
                      <a className='active'>{page.title}</a>
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