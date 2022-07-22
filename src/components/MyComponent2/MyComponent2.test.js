import React from 'react';
import { shallow } from 'enzyme';
import MyComponent2 from './MyComponent2';

describe('<MyComponent2 />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MyComponent2 />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
