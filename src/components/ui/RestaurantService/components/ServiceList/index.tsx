import { services } from '@/constants/Local/services';
import IconService from '../Icons';
import ServicesItem from '../ServicesItem';

export default function ServiceList() {
  return (
    <div className="flex space-x-36 justify-center" data-testid="service-list">
      {services.map((service) => (
        <ServicesItem
          key={service.id}
          icon={<IconService icon={service.type} />}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
