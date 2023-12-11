import { render, screen } from '@testing-library/react';
import InputWithLabel from '@/components/ui/Form/components/InputWithLabel';
import { createRef } from 'react';
import { it } from 'node:test';

const ref = createRef<HTMLInputElement>();

const inputAttributeMocks = {
  fullname: {
    label: 'fullname',
    placeholder: 'Enter your fullname'
  },
  email: {
    label: 'email',
    placeholder: 'Enter your e-mail'
  },
  phone: {
    label: 'phone number',
    placeholder: 'Enter your phone number'
  },
  guest: {
    label: 'nº of guest',
    placeholder: 'Enter number of guests'
  },
  date: {
    label: 'date',
    placeholder: 'Enter date'
  },
  time: {
    label: 'time',
    placeholder: 'Enter time'
  },
  allergiesDietaryRestrictions: {
    label: 'allergies or dietary restrictions',
    placeholder: 'Enter your Allergies or Dietary Restrictions'
  },
  promoCode: {
    label: 'promo code',
    placeholder: 'Enter your Promo Code'
  }
};

describe('<InputWithLabel />', () => {
  it('should render full name input with type text and user label', () => {
    render(
      <InputWithLabel
        ref={ref}
        placeholder={inputAttributeMocks.fullname.label}
        label={inputAttributeMocks.fullname.placeholder}
      />
    );

    expect(
      screen.getByPlaceholderText(inputAttributeMocks.fullname.placeholder)
    ).toHaveAttribute('type', 'text');
  });

  it('should render name input with type mail and  mail icon', () => {
    render(
      <InputWithLabel
        ref={ref}
        type="mail"
        label={inputAttributeMocks.email.label}
        placeholder={inputAttributeMocks.email.placeholder}
      />
    );

    expect(
      screen.getByPlaceholderText(inputAttributeMocks.email.placeholder)
    ).toHaveAttribute('type', 'mail');
  });

  it('should render name input with type number and phone icon', () => {
    render(
      <InputWithLabel
        ref={ref}
        type="number"
        label={inputAttributeMocks.phone.label}
        placeholder={inputAttributeMocks.phone.placeholder}
      />
    );

    expect(
      screen.getByPlaceholderText(inputAttributeMocks.phone.placeholder)
    ).toHaveAttribute('type', 'number');
  });
});
