import Title from '@/components/ui/title';

type ChefProps = {
  chefList: JSX.Element;
};

export default function Chef({ chefList }: ChefProps) {
  return (
    <div className="space-y-16 py-36 px-12">
      <Title className="text-4xl" asChild>
        <h2>our masters chefs</h2>
      </Title>
      <div className="h-[20rem] flex gap-4">{chefList}</div>
    </div>
  );
}
