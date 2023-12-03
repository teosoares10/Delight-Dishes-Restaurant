import Title from '@/components/ui/Typography/Title';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import ContactWithIcon from './components/ContactWithIcon';

export default function ContactUs() {
  return (
    <div className="space-y-4" data-testid="contact-us">
      <Title className="text-xl text-left">contact us</Title>
      <div className="space-y-4">
        <ContactWithIcon
          icon={<MapPin size={20} data-testid="map-pin-icon" />}
          contact="address"
        />
        <ContactWithIcon
          icon={<EnvelopeSimple size={20} data-testid="mail-icon" />}
          contact="teosoares10@gmail.com"
        />
        <ContactWithIcon
          icon={<Phone size={20} data-testid="phone-icon" />}
          contact="(+244) 941477502"
        />
      </div>
    </div>
  );
}
