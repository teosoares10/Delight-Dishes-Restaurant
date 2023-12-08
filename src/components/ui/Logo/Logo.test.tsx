import { render, screen } from '@testing-library/react';
import Logo from '@/components/ui/Logo';

describe('<Logo />', () => {
  it('should render Logo', () => {
    render(<Logo />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('should have a title ', () => {
    render(<Logo />);

    expect(screen.getByTestId('title')).toHaveTextContent('delight dishes');
  });

  it('should have a text ', () => {
    render(<Logo />);

    expect(screen.getByTestId('text')).toHaveTextContent('restaurant');
  });
});
