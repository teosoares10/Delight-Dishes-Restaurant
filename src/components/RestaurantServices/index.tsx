import { services } from '@/db/Local/services';
import IconService from '../Icons/RestaurantServices';
import ServicesItem from './components/ServicesItem';

export default function RestaurantServices() {
  return (
    <div className="flex justify-between text-center mt-24 px-12">
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
