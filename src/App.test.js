import { render, screen } from '@testing-library/react';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';


test('renders learn react link', () => {
  render(
    <div>
         <App1 />
         <App2 />
         <App3 />
    </div>
 

);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
