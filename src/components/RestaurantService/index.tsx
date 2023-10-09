import { services } from '@/db/Local/services';
import IconService from '../Icons/RestaurantServices';
import ServicesItem from './components/ServicesItem';
import { cormorantInfant } from '../../../public/fonts';

export default function RestaurantServices() {
  return (
    <div className="border-spacing-4 space-y-16 text-center mb-36 px-12">
      <h1
        style={cormorantInfant.style}
        className="text-4xl font-bold capitalize"
      >
        catering service
      </h1>
      <div className="flex justify-between">
        {services.map((service) => (
          <ServicesItem
            key={service.id}
            icon={<IconService icon={service.type} />}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
