import React from 'react';
import { render, screen } from '@testing-library/react';
import MainApp from './App';
import ReactDOM from 'react-dom';



// test('renders learn react link', () => {
//   const { getByText } = render(<MainApp />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   // const div = document.createElement('div');
//   // ReactDOM.render(<MainApp />, div);
//   // ReactDOM.unmountComponentAtNode(div);
// });



test('renders learn react link', () => {
  render(<MainApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})