import { render } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button link', () => {
  it('should render button link', () => {
    const { getByText, getByRole } = render(<Button>text</Button>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('text')).toBeInTheDocument();
  });
});
