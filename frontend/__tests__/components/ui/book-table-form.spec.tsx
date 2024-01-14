import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookTableForm from '@/components/ui/book-table-form';

describe('<BookTableForm>', () => {
  const ref = React.createRef<HTMLFormElement>();

  it('should render default correctly', () => {
    render(<BookTableForm ref={ref} />);
    expect(screen.getByLabelText('nº of guest (s)')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getByPlaceholderText('Enter your time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your date')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should allow user select option', async () => {
    render(<BookTableForm ref={ref} />);
    await userEvent.selectOptions(screen.getByRole('combobox'), '3 Person');
    expect(
      (
        screen.getByRole('option', {
          name: '3 Person',
          hidden: true
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
  });

  it('should allow user set time', async () => {
    render(<BookTableForm ref={ref} />);
    await userEvent.type(
      screen.getByPlaceholderText('Enter your time'),
      '10:30'
    );
    expect(screen.getByPlaceholderText('Enter your time')).toHaveValue('10:30');
  });

  it('should allow user set date', async () => {
    render(<BookTableForm ref={ref} />);
    await userEvent.type(
      screen.getByPlaceholderText('Enter your date'),
      '2023-12-10'
    );
    expect(screen.getByPlaceholderText('Enter your date')).toHaveValue(
      '2023-12-10'
    );
  });

  describe('tests for submit button', () => {
    it('should render all messages error when all inputs are not correctly', async () => {
      render(<BookTableForm ref={ref} />);
      await userEvent.click(screen.getByRole('button'));
      expect(screen.getByPlaceholderText('Enter your time')).toHaveValue('');
      expect(screen.getByPlaceholderText('Enter your date')).toHaveValue('');
      expect(screen.getAllByRole('alert')).toHaveLength(2);
    });
  });
});
