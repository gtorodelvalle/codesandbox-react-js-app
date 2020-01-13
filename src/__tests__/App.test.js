import App from '../App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('should generate a valid snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
