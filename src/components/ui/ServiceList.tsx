import { services } from '@/constants/Local/services';
import ServiceIcon from './ServiceIcon';
import ServiceItem from './ServiceItem';

export default function ServiceList() {
  return (
    <div className="flex justify-between">
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          icon={<ServiceIcon icon={service.type} />}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
