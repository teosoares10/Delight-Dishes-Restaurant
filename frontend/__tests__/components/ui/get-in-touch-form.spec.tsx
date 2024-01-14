import GetInTouchForm from '@/components/ui/get-in-touch-form';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<GetInTouchForm />', () => {
  const ref = React.createRef<HTMLFormElement>();

  it('should render default correctly', () => {
    render(<GetInTouchForm ref={ref} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getByRole('button')).toBeVisible();
  });
});
