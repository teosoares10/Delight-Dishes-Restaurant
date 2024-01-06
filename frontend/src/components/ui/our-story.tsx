import Link from 'next/link';
import Img from '@/components/ui/image';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';
import { Button } from '@/components/ui/button';

export default function OurStory() {
  return (
    <div className="flex flex-col justify-between items-center py-36 px-12 space-y-28">
      <div className="flex">
        <Img
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          className="w-[40rem] h-[25rem]"
          width={350}
          height={450}
          alt=""
        />
        <div className="flex flex-col justify-center items-center space-y-8">
          <Title className="text-4xl text-left">delight dishes</Title>
          <Text className="px-8 text-center">
            Born from a passion for culinary excellence, our story began with a
            dream to redefine dining. Every dish tells a tale of creativity and
            craftsmanship, inviting you on a journey through flavor..
          </Text>
          <Button
            className="capitalize hover:bg-orange-600 hover:text-white text-orange-600 border border-orange-600"
            asChild
          >
            <Link href={``} data-testid="link">
              learn more
            </Link>
          </Button>
        </div>

        <Img
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          className="w-[40rem] h-[25rem]"
          width={350}
          height={450}
          alt=""
        />
      </div>
    </div>
  );
}
