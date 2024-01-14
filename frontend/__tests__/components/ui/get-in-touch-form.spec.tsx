import GetInTouchForm from '@/components/ui/get-in-touch-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('<GetInTouchForm />', () => {
  const ref = React.createRef<HTMLFormElement>();

  it('should render default correctly', () => {
    render(<GetInTouchForm ref={ref} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByRole('button')).toBeVisible();
  });

  describe('tests for submit form', () => {
    it('should not submit when inputs are empty', async () => {
      render(<GetInTouchForm ref={ref} />);
      expect(screen.getByPlaceholderText('Enter your name')).toHaveValue('');
      expect(screen.getByPlaceholderText('Enter your email')).toHaveValue('');
      expect(screen.getByPlaceholderText('Enter your message')).toHaveValue('');
      await userEvent.click(screen.getByRole('button'));
      expect(screen.getAllByRole('Alert')).toHaveLength(2);
    });

    it('should not submit when name input is empty', async () => {
      render(<GetInTouchForm ref={ref} />);
      expect(screen.getByPlaceholderText('Enter your name')).toHaveValue('');
      await userEvent.type(
        screen.getByPlaceholderText('Enter your email'),
        'johndoe@gmail.com'
      );
      expect(screen.getByPlaceholderText('Enter your email')).toHaveValue(
        'jhondoe@gmail.com'
      );
      expect(screen.getByPlaceholderText('Enter your message')).toHaveValue('');
      await userEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('Alert')).toBeVisible();
    });
  });
});
