import React from 'react';
import { render, screen } from '@testing-library/react';
import BookTableForm from '@/components/ui/book-table-form';

describe('<BookTableForm>', () => {
  const ref = React.createRef<HTMLFormElement>();
  render(<BookTableForm ref={ref} />);

  it('should render default correctly', () => {
    expect(screen.getByLabelText('nº of guest (s)')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getByPlaceholderText('Enter your time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your date')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
