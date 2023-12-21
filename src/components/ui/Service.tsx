import Title from '@/components/ui/Typography/Title';
import ServiceList from '@/components/ui/RestaurantService/components/ServiceList';

export default function RestaurantServices() {
  return (
    <div
      className="border-spacing-4 space-y-16 text-center mb-36 px-12"
      data-testid="restaurant-services"
    >
      <Title className="text-4xl">catering service</Title>
      <ServiceList />
    </div>
  );
}
