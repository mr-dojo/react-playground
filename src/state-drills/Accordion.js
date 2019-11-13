import React, { Component } from 'react';

export default class Accordion extends Component {
  static defaultProps = {
    sections: [] 
  };
  state = {
    currentSectionIndex: 0
  };
  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index})
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
      </li>
      ))
    }  
  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
      <p className='content'>
        {currentSection.content}
      </p>
    )
  }
  render() { 
    return (
      <ul>
        {this.renderButtons()}
        {!!this.props.sections.length && this.renderContent()}
      </ul>
    )
  }
}