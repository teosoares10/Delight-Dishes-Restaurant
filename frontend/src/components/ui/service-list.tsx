import { services } from 'src/constants/Local/services';
import ServiceIcon from '@/components/ui/service-icon';
import ServiceItem from '@/components/ui/service-item';

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
