import React, { Component } from "react"

class OCHAHeader extends Component{
  constructor() {
    super();
    this.menuRef = React.createRef();
    this.toggleServicesMenu = this.toggleServicesMenu.bind(this);
    this.state = { menuOpen: false };
  }

  toggleServicesMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    return (
      <div className="global-header">
        <div className="grid-container">
          <div className={`col-12 global-header-content ${this.state.menuOpen ? 'active' : ''}`}>
            <a href="#" data-toggle="dropdown" className="ocha-services" onClick={this.toggleServicesMenu} >
              <span className="ocha-logo"></span>
              <span className="ocha-services-text">OCHA Services</span>
              <svg className="icon-o-arrow-up" viewBox="0 0 48 48"><path d="M0,34a4,4,0,0,1,1.17-2.83l20-20a4,4,0,0,1,5.66,0l20,20a4,4,0,1,1-5.66,5.66L24,19.66,6.83,36.83A4,4,0,0,1,0,34Z"></path></svg>
              <svg className="icon-o-arrow-down" viewBox="0 0 48 48"><path d="M48,14a4,4,0,0,1-1.17,2.83l-20,20a4,4,0,0,1-5.66,0l-20-20a4,4,0,0,1,5.66-5.66L24,28.34,41.17,11.17A4,4,0,0,1,48,14Z"></path></svg>
            </a>
            <div className="dropdown-menu ocha-services-menu" role="menu" ref={this.menuRef}>
              <div className="grid-container">
                <div className="col-3">
                  <p className="list-title">Related Platforms</p>
                  <ul className="ocha-links-list">
                    <li>
                      <a href="https://centre.humdata.org/" target="_blank" rel="noopener noreferrer">Centre for Humanitarian Data</a>
                    </li>
                    <li>
                      <a href="https://tools.humdata.org/" target="_blank" rel="noopener noreferrer">HDX Tools</a>
                    </li>
                    <li>
                      <a href="https://data.humdata.org/" target="_blank" rel="noopener noreferrer">Humanitarian Data Exchange</a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <p className="list-title">Other OCHA Services</p>
                  <ul className="ocha-links-list">
                    <li><a href="https://fts.unocha.org/" target="_blank" rel="noopener noreferrer">Financial Tracking Service</a></li>
                    <li><a href="https://data.humdata.org/" target="_blank" rel="noopener noreferrer">Humanitarian Data Exchange</a></li>
                    <li><a href="https://humanitarian.id/" target="_blank" rel="noopener noreferrer">Humanitarian ID</a></li>
                    <li><a href="https://hum-insight.info/" target="_blank" rel="noopener noreferrer">Humanitarian InSight</a></li>
                    <li><a href="https://www.humanitarianresponse.info" target="_blank" rel="noopener noreferrer">Humanitarian Response</a></li>
                  </ul>
                </div>
                <div className="col-3">
                  <p className="list-title list-title-empty">&nbsp;</p>
                  <ul className="ocha-links-list">
                    <li><a href="https://interagencystandingcommittee.org/" target="_blank" rel="noopener noreferrer">Inter-Agency Standing Committee</a></li>
                    <li><a href="https://www.unocha.org" target="_blank" rel="noopener noreferrer">OCHA Website</a></li>
                    <li><a href="https://reliefweb.int" target="_blank" rel="noopener noreferrer">Relief Web</a></li>
                    <li><a href="https://vosocc.unocha.org/" target="_blank" rel="noopener noreferrer">Virtual OSOCC</a></li>
                  </ul>
                </div>
                <div className="col-3 ocha-see-all-container">
                  <a href="https://www.unocha.org/ocha-digital-services" target="_blank" className="btn ocha-see-all" rel="noopener noreferrer">See all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OCHAHeader