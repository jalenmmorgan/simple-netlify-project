import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MyComponent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
