/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import '@testing-library/jest-dom';


describe("Form", () => {
  it('renders the form with email and password fields', () => {
    render(<Form />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Create your password')).toBeInTheDocument();
  });

  it('displays password strength rules', () => {
    render(<Form />);
    expect(screen.getByText('8 characters or more (no spaces)')).toBeInTheDocument();
    expect(screen.getByText('Uppercase and lowercase letters')).toBeInTheDocument();
    expect(screen.getByText('At least one digit')).toBeInTheDocument();
  });
});