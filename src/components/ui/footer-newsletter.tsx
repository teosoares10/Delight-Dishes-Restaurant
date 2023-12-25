import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  return (
    <div className="flex h-[10rem] bg-gray-400">
      <div className="w-[30rem] bg-gray-500 pl-12 pt-14">
        <span className="uppercase" data-testid="span">
          subscribe to our
        </span>
        <Title className="text-2xl text-left uppercase">newsletter</Title>
      </div>
      <div className="flex-1 pl-48 pt-14">
        <div className="flex items-center gap-1 bg-white p-2 w-[40rem] rounded-full">
          <input
            className="w-full h-9 text-black pl-2 rounded-full"
            type="text"
            placeholder="Enter email address"
          />
          <Button className="w-[10rem] bg-orange-600 hover:bg-orange-400 rounded-full uppercase">
            submit
          </Button>
        </div>
      </div>
    </div>
  );
}
