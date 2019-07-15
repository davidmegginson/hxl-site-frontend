import React, { Component }  from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

class Sidenav extends Component{
  render() {
    return (
      <nav className='sidebar tertiary-nav' aria-labelledby="tertiary-navigation">
        { this.props.links.map((group, groupID) => {
          return (
            <ul key={groupID}>
              { group.links.map((item, itemID) => {
                let link = <a href={item.link.url}>{item.link.title}</a>;
                if (itemID===0) {
                  link = (item.link.url==='#') ? <h4>{item.link.title}</h4> : <h4><a href={item.link.url}>{item.link.title}</a></h4>
                }
                return (
                  <li key={item.link.title}>{link}</li>
                )
              })}
            </ul>
          )
        })}
      </nav>
    )
  }
}

export default Sidenav;