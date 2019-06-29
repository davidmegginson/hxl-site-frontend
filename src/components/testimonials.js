import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Carousel from '../components/carousel'

const Testimonials = ({ data }) => (
  <Carousel responsive={[ {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}, {breakpoint: 10000, settings: {slidesToShow: 4, slidesToScroll: 4}} ]}>
    { data.allWordpressWpTestimonial.edges.map((item) => {
      let logo = (item.node.featured_media) ? item.node.featured_media.source_url : null;

      return (
        <div className='carousel__item' key={item.node.slug}>
          <blockquote>
            <div className='quotation-mark'>“</div>
            <div className='blockquote__inner'>
              <p>“{item.node.acf.quote}”</p>
              <cite><span>source:&nbsp;</span> <a href={item.node.acf.sourceurl} target='_blank' rel='noopener noreferrer'>{item.node.acf.source}</a></cite>
            </div>
            <div className='org'>
              <div className='org__logo'><img src={logo} alt='logo' /></div>
              <h4>{item.node.title}</h4>
            </div>
          </blockquote>
        </div>
      )
    })} 
  </Carousel>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpTestimonial{
          edges{
            node{
              title
              slug
              acf{
                quote
                source
                sourceurl
              }
              featured_media{
                source_url
              }
            }
          }
        }
      }
    `}
    render={data => <Testimonials data={data} {...props} />}
  />
)