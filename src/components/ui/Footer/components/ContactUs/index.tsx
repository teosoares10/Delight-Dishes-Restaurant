import Title from '@/components/ui/Typography/Title';
import PhoneIcon from '@/components/ui/Icons/Phone';
import MapPinIcon from './components/Icon/MapPin';
import MailIcon from '@/components/ui/Icons/Mail';

// TODO: create ContactWithIcon component

export default function ContactUs() {
  return (
    <div className="space-y-4" data-testid="contact-us">
      <Title className="text-xl text-left">contact us</Title>
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <MapPinIcon />
          <span className="block" data-testid="span">
            address
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <PhoneIcon />
          <span data-testid="span">(+244) 941477502</span>
        </div>
        <div className="flex gap-4 items-center">
          <MailIcon />
          <span data-testid="span">teosoares10@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
