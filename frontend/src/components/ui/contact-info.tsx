import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import FooterContactWithIcon from '@/components/ui/footer-contact-with-icon';
import { cn } from '@/lib/utils';

type ContactInfoProps = {
  className?: string;
};

export default function ContactInfo({ className }: ContactInfoProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="space-y-4">
        <FooterContactWithIcon icon={<MapPin size={20} />} contact="address" />

        <FooterContactWithIcon
          icon={<EnvelopeSimple size={20} />}
          contact="teosoares10@gmail.com"
        />

        <FooterContactWithIcon
          icon={<Phone size={20} />}
          contact="(+244) 941477502"
        />
      </div>
    </div>
  );
}
