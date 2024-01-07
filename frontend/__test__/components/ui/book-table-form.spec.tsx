import React from 'react';
import { render, screen } from '@testing-library/react';
import BookTableForm from '@/components/ui/book-table-form';

describe('<BookTableForm>', () => {
  it('should render default correctly', () => {
    const ref = React.createRef<HTMLFormElement>();
    render(<BookTableForm ref={ref} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
