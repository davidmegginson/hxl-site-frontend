import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import Organizations from '../components/organizations'
import Testimonials from '../components/testimonials'

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
        <Testimonials />
      </section>

      <section>
        <h4 className='center'>Blurb for orgs that use HXL</h4>
        <Organizations />
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