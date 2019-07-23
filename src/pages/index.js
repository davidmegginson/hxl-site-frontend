import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import Organizations from '../components/organizations'
import Testimonials from '../components/testimonials'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        title={'Home'}
      />
      <div className='wrapper'>
        <Header />
        <section className='hero'>
          <div className='grid-container'>
            <div className='hero__inner'>
              <h1 className='special'>The Humanitarian Exchange Language</h1>
              <h3>A simple standard for messy data</h3>
            </div>
          </div>
        </section>

        <section className='tutorial background-gray'>
          <h2 className='center'>The 30-second HXL Tutorial</h2>
          <div className='grid-container'>
            <div className='col-4 tutorial__step'>
              <img src='./images/tutorial-1.png' alt='' />
              <h3><a href='/'><div className='bullet--number'><span>1</span></div>Grab a spreadsheet of humanitarian data</a></h3>
            </div>
            <div className='col-4 tutorial__step'>
              <img src='./images/tutorial-2.png' alt='' />
              <h3><a href='/'><div className='bullet--number'><span>2</span></div>Insert a new row between the headers and the data</a></h3>
            </div>
            <div className='col-4 tutorial__step'>
              <img src='./images/tutorial-3.png' alt='' />
              <h3><a href='/'><div className='bullet--number'><span>3</span></div>Add some HXL tags</a></h3>
            </div>
          </div>
          <div className='center'>
            <p className='small'>Not sure which HXL tag to use? See <a href='/standard/dictionary/'>HXL hashtags in action classifying datasets</a>.<br/>Then, HXL-ate your own spreadsheets.</p>
            <a href='./how-it-works/' className='btn btn--primary'>See how it works</a>
          </div>
        </section>

        {/*<section className='background-gray'>
          <h2 className='center'>What people are saying</h2>
          <Testimonials />
        </section>*/}

        <section className='background-gray padding-bottom'>
          <h2 className='center'>Organisations that use HXL</h2>
          <Organizations />
        </section>

        <Footer hasCTA={false} />
      </div>
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