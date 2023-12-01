import { cormorantInfant } from '../../../public/fonts';
import Img from '../Image';
import { Button } from '../ui/button';

export default function OurStory() {
  return (
    <div className="flex justify-between items-center py-36 px-8">
      <div className="space-y-8">
        <h1
          style={cormorantInfant.style}
          className="text-4xl font-bold capitalize"
        >
          our story
        </h1>
        <p className="w-[35rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus
          doloremque nesciunt eos earum cumque est...
        </p>
        <Button className="capitalize bg-blue-500">learn more</Button>
      </div>

      <div className="flex gap-4">
        <Img src="" width={350} height={450} alt="" />
        <Img src="" width={350} height={450} alt="" />
      </div>
    </div>
  );
}
