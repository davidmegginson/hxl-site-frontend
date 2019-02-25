import React from "react"
import { graphql } from "gatsby"

import Header from '../components/header'
import Footer from '../components/footer'
import Carousel from '../components/carousel'

export default ({ data }) => {
  return (
    <React.Fragment>
      <Header />
      <section className='hero'>
        <div className='grid-container'>
          <div className='hero__inner'>
            <h2>Simple standard for messy data</h2>
            <h5>HXL is a <a href='/'>different kind</a> of data standard, designed to improve information sharing during a humanitarian crisis without adding <a href='/'>extra reporting burdens</a>.</h5>
          </div>
        </div>
      </section>

      <section>
        <h4 className='center'>The 30-second HXL Tutorial</h4>
        <div className='grid-container'>
          <div className='col-4 tutorial__step'>
            <img src='./images/tutorial-1.png' alt='' />
            <h5><a href='/'><div className='bullet--number'><span>1</span></div>Grab a spreadsheet of humanitarian data</a></h5>
          </div>
          <div className='col-4 tutorial__step'>
            <img src='./images/tutorial-2.png' alt='' />
            <h5><a href='/'><div className='bullet--number'><span>2</span></div>Insert a new row between the headers and the data</a></h5>
          </div>
          <div className='col-4 tutorial__step'>
            <img src='./images/tutorial-3.png' alt='' />
            <h5><a href='/'><div className='bullet--number'><span>3</span></div>Add some HXL tags</a></h5>
          </div>
        </div>
        <div className='center'>
          <p className='small'>Not sure which HXL tag to use? See <a href='/'>HXL hashtags in action classifying datasets</a>.<br/>Then, HXL-ate your own spreadsheets.</p>
          <button className='btn btn--primary'>Open HXL Tag Assist</button>
        </div>
      </section>

      <section>
        <h4 className='center'>What people are saying</h4>
        <Carousel responsive={[ {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}, {breakpoint: 10000, settings: {slidesToShow: 4, slidesToScroll: 4}} ]}>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
          <div className='carousel__item'>
            <blockquote>
              <div className='quotation-mark'>“</div>
              <div className='blockquote__inner'>
                <p>“IOM hopes to make it easier for its field staff to share <a>data through HDX</a> and to increase the interoperability of this data by using the Humanitarian Exchange Language (HXL).”</p>
                <cite><span>source:</span> IOM and OCHA: Partners in Displacement Data</cite>
              </div>
              <div className='org'>
                <div className='org__logo'></div>
                <h6>International Organization for Migration (IOM)</h6>
              </div>
            </blockquote>
          </div>
        </Carousel>
      </section>

      {/*
      <section>
       <h4 className='center'>Blurb for orgs that use HXL</h4>
        <Carousel responsive={[ {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}, {breakpoint: 10000, settings: {slidesToShow: 4, slidesToScroll: 4}} ]}>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='carousel__item blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
        </Carousel>
      </section>
      */}

      <section>
        <h4 className='center'>Blurb for orgs that use HXL</h4>
        <div className='grid-container'>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
          <div className='col-3 blurb'>
            <div className='logo'>
              logo
            </div>
            <div className='org'>
              <p>Name of organisation</p>
              <h6><a href='#' className='external'>See hxlated data set on HDX</a></h6>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

// export const pageQuery = graphql`
//   query {
//     allWordpressPost(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//         }
//       }
//     }
//   }
// `

// <div>
//   <h1>My WordPress Blog</h1>
//   <h4>Posts</h4>
//   {data.allWordpressPost.edges.map(({ node }) => (
//     <div>
//       <p>{node.title}</p>
//       <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//     </div>
//   ))}
// </div>