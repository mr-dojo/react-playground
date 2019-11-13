import React, { Component } from 'react';

export default class Accordion extends Component {
  static defaultProps = {
    sections: [] 
  };
  state = {
    currentSectionIndex: Number,
  };
  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index})
  }
  renderSections() {
    return this.props.sections.map((section, index) => (
      <li>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {!!this.props.sections.length || (this.state.currentSectionIndex >= 0 && this.renderContent(index))}
      </li>
      ))
    }  
  renderContent(index) {
    const currentSection = this.props.sections[index]
    return (
      <p className='content'>
        {currentSection.content}
      </p>
    )
  }
  render() { 
    return (
      <ul>
        {this.renderSections()}
      </ul>
    )
  }
}