import React from 'react';
import { Accordion } from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
class AccordionComponent extends React.Component {
  render() {
    return (
      <Accordion className='accordion-component'>
        {this.props.children}
      </Accordion>
    )
  }
}
 
export default AccordionComponent