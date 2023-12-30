import Title from '@/components/ui/title';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  return (
    <div className="w-[20rem] space-y-4">
      <div>
        <span className="uppercase" data-testid="span">
          subscribe to our
        </span>
        <Title className="text-2xl text-left uppercase">newsletter</Title>
      </div>

      <div className="flex flex-col space-y-2">
        <input
          className="border border-orange-600 text-black p-2 rounded-lg"
          type="text"
          placeholder="Enter email address"
        />
        <Button className="w-24 ml-auto bg-orange-600 hover:bg-orange-400 text-white rounded-lg uppercase">
          submit
        </Button>
      </div>
    </div>
  );
}
