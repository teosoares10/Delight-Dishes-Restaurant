import Title from '@/components/ui/Title';
import ServiceList from '@/components/ui/ServiceList';

export default function Service() {
  return (
    <div className="border-spacing-4 space-y-16 text-center mb-36 px-12">
      <Title className="text-4xl">catering service</Title>
      <ServiceList />
    </div>
  );
}
