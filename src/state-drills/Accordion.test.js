import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion.js';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

describe(`Accordion Component`, () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab as expected', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    console.log('>>> WRAPPER <<<')
    console.log(wrapper.debug())
    console.log('>>> FIND(BUTTON) <<<')
    console.log(wrapper.find('button').at(1).simulate('click'))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
});