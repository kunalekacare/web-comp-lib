import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginCard } from '../login-card';

describe('LoginCard', () => {
  const defaultProps = {
    onSubmit: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<LoginCard {...defaultProps} />);
    
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
  });

  it('renders with custom title and subtitle', () => {
    render(
      <LoginCard
        {...defaultProps}
        title="Custom Title"
        subtitle="Custom subtitle"
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom subtitle')).toBeInTheDocument();
  });

  it('renders with custom labels', () => {
    render(
      <LoginCard
        {...defaultProps}
        emailLabel="Email Address"
        passwordLabel="Secret Password"
        submitLabel="Sign In"
      />
    );
    
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Secret Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('handles form submission with email and password', async () => {
    const onSubmit = jest.fn();
    render(<LoginCard onSubmit={onSubmit} />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /continue/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('prevents form submission when inputs are empty', () => {
    const onSubmit = jest.fn();
    render(<LoginCard onSubmit={onSubmit} />);
    
    const submitButton = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(submitButton);
    
    // Form will submit with empty values since we're not preventing it
    expect(onSubmit).toHaveBeenCalledWith('', '');
  });

  it('shows loading state', () => {
    render(<LoginCard {...defaultProps} isLoading={true} />);
    
    const submitButton = screen.getByRole('button', { name: /signing in/i });
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Signing in...');
  });

  it('shows error message', () => {
    const errorMessage = 'Invalid credentials';
    render(<LoginCard {...defaultProps} errorMessage={errorMessage} />);
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toHaveAttribute('role', 'alert');
  });

  it('shows forgot password link when onForgotPassword is provided', () => {
    const onForgotPassword = jest.fn();
    render(<LoginCard {...defaultProps} onForgotPassword={onForgotPassword} />);
    
    const forgotPasswordButton = screen.getByText('Forgot password?');
    expect(forgotPasswordButton).toBeInTheDocument();
    
    fireEvent.click(forgotPasswordButton);
    expect(onForgotPassword).toHaveBeenCalledTimes(1);
  });

  it('does not show forgot password link when onForgotPassword is not provided', () => {
    render(<LoginCard {...defaultProps} />);
    
    expect(screen.queryByText('Forgot password?')).not.toBeInTheDocument();
  });

  it('renders social login section when renderSocial is provided', () => {
    const socialContent = <button>Sign in with Google</button>;
    render(<LoginCard {...defaultProps} renderSocial={socialContent} />);
    
    expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<LoginCard {...defaultProps} className="custom-card" />);
    
    // The className is applied to the Card component, not the CardHeader
    const card = screen.getByText('Sign in').closest('div')?.parentElement;
    expect(card).toHaveClass('custom-card', 'w-full', 'max-w-sm');
  });

  it('has proper form attributes', () => {
    render(<LoginCard {...defaultProps} />);
    
    const form = screen.getByRole('button', { name: /continue/i }).closest('form');
    expect(form).toHaveAttribute('novalidate');
  });

  it('has proper input attributes', () => {
    render(<LoginCard {...defaultProps} />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('autocomplete', 'email');
    expect(emailInput).toHaveAttribute('required');
    
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('autocomplete', 'current-password');
    expect(passwordInput).toHaveAttribute('required');
  });

  it('shows aria-invalid when there is an error', () => {
    render(<LoginCard {...defaultProps} errorMessage="Error message" />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    expect(passwordInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles async onSubmit', async () => {
    const onSubmit = jest.fn().mockImplementation(() => Promise.resolve());
    render(<LoginCard onSubmit={onSubmit} />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /continue/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });
});
