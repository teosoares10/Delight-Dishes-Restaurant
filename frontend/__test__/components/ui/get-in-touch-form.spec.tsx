import GetInTouchForm from '@/components/ui/get-in-touch-form';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<GetInTouchForm>', () => {
  it('should render default correctly', () => {
    const ref = React.createRef<HTMLFormElement>();
    render(<GetInTouchForm ref={ref} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByRole('button')).toBeVisible();
  });
});
