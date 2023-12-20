import NavBar from '@/components/ui/Nav';
import Title from '@/components/ui/Typography/Title';

export default function Menu() {
  return (
    <div className="space-y-4" data-testid="menu-footer">
      <Title className="text-xl text-left">quick links</Title>
      <NavBar className="flex-col" />
    </div>
  );
}
