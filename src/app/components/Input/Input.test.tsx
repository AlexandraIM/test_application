import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders input with correct type', () => {
    render(<Input type="text" />);
    const inputElement = screen.getByRole('textbox'); 
    expect(inputElement).toHaveProperty('type', 'text');
  });

  it('renders placeholder', () => {
    render(<Input placeholder="Enter your text" />);
    const inputElement = screen.getByPlaceholderText('Enter your text'); // More accessible
    expect(inputElement).toHaveProperty('placeholder', 'Enter your text');
  });

  it('renders disabled state correctly', () => {
      render(<Input disabled />);
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveProperty('disabled', true);
  });

});