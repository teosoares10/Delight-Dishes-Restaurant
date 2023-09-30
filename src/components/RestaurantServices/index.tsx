import { services } from '@/db/Local/services';
import IconService from '../Icons/RestaurantServices';
import ServicesItem from './components/ServicesItem';

export default function RestaurantServices() {
  return (
    <div className="flex justify-center gap-8 text-center mt-24">
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
