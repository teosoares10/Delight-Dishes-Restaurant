import Title from '@/components/ui/title';

export default function OpenTime() {
  return (
    <div className="space-y-4">
      <Title className="text-xl text-left">opening times</Title>
      <div>
        <span className="block">06:00 AM - 11:00 PM</span>
        <span>Every Day</span>
      </div>
    </div>
  );
}
