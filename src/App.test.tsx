import React, {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn ci cd link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn ci\/cd/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a increment button', ()=>{
  render(<App />);
  const button = screen.getByText("Add")
  expect(button).toBeInTheDocument()
})


test('clicking on increment button should increment the counter', ()=>{
  render(<App />);
  const button = screen.getByText("Add")
  expect(button).toBeInTheDocument()
  const counterTag = screen.getByTestId("counter")
  expect(counterTag).toBeInTheDocument()
  expect(counterTag.innerHTML === "0").toBeTruthy()
  fireEvent.click(button)
  expect(counterTag.innerHTML === "1").toBeTruthy()
})