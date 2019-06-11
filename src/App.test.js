import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('start demo test',()=>{
	expect(true).toBeTruthy()
})
/*import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
*/
/*
it('renders correctly', () => {  
const tree = renderer  
.create(<App />)  
.toJSON();  
  expect(tree).toMatchSnapshot();  
});
test('App changes the class when hovered', () => {
  const component = renderer.create(<App/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  
  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});*/