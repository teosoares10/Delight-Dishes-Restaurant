import Title from '@/components/ui/title';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import FooterContactWithIcon from '@/components/ui/footer-contact-with-icon';

export default function ContactUsInfo() {
  return (
    <div className="space-y-4">
      <Title className="text-xl text-left">contact us</Title>
      <div className="space-y-4">
        <FooterContactWithIcon
          icon={<MapPin size={20} data-testid="map-pin-icon" />}
          contact="address"
        />
        <FooterContactWithIcon
          icon={<EnvelopeSimple size={20} data-testid="mail-icon" />}
          contact="teosoares10@gmail.com"
        />
        <FooterContactWithIcon
          icon={<Phone size={20} data-testid="phone-icon" />}
          contact="(+244) 941477502"
        />
      </div>
    </div>
  );
}
