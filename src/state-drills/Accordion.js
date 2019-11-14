import React, { Component } from 'react';

export default class Accordion extends Component {
  static defaultProps = {
    sections: [] 
  };
  state = {
    activeSectionIndex: null,
  };

  handleButtonClick = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex})
  }
  
  renderItem(section, idx, activeSectionIndex) {
    return (
      <li key={idx}>
        <button 
          type='button'
          onClick={() => this.handleButtonClick(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }  
  render() { 
    const activeSectionIndex = this.state.activeSectionIndex
    const sections = this.props.sections
    return (
      <ul>
        {sections.map((section, idx) => 
        this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}