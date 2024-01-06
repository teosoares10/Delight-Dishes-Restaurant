import { services } from 'src/constants/Local/services';
import ServiceIcon from '@/components/ui/service-icon';
import ServiceItem from '@/components/ui/service-item';

export default function Service() {
  return (
    <div className="border-spacing-4 space-y-16 text-center mb-36 px-12">
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
    </div>
  );
}
