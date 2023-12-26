import NavBar from '@/components/ui/nav';
import Title from '@/components/ui/title';

export default function Menu() {
  return (
    <div className="space-y-4">
      <Title className="text-xl text-left">quick links</Title>
      <NavBar className="flex-col" />
    </div>
  );
}
