import { services } from '@/db/RestaurantService/services';
import Card from '../Card';
import IconService from '../Icons/RestaurantServices';

export default function RestaurantServices() {
  return (
    <div className="flex justify-center gap-8 text-center mt-24">
      {services.map((service) => (
        <Card
          key={service.id}
          type="service"
          icon={<IconService icon={service.type} />}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
