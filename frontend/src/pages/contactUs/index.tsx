import { Button } from '@/components/ui/button';
import ContactInfo from '@/components/ui/contact-info';
import { GetInTouchForm } from '@/components/ui/get-in-touch-form';
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';

export default function ContactUs() {
  return (
    <div className="mx-14">
      <header className="flex">
        <div className="flex-1 pl-8 py-8 bg-gray-500">
          <div className="w-[35rem] space-y-4">
            <Title className="text-left text-3xl text-white">contact us</Title>
            <Text className=" text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              mollitia quod neque, molestiae eveniet dignissimos consequatur
              est.
            </Text>
            <Button className="border border-orange-600 capitalize text-white hover:bg-orange-600 hover:text-white">
              send a message
            </Button>
          </div>
        </div>

        <div className="w-[25rem] bg-orange-500 space-y-4 p-4">
          <Title className="text-xl text-left text-white">contact info</Title>
          <ContactInfo className="text-white" />
        </div>
      </header>

      <main className="space-y-4 mt-14">
        <div className="flex gap-8 justify-center items-center h-[35rem]">
          <div className="w-[25rem] h-full space-y-4">
            <Title className="text-2xl text-left">get in touch</Title>
            <GetInTouchForm />
          </div>
          <div className="h-full space-y-4">
            <Title className="text-2xl text-left uppercase">fqa</Title>
            <ul className="w-[30rem] space-y-2">
              <li>
                <div className="flex justify-between items-center bg-orange-500 p-1">
                  <Title className="text-white">according 1</Title>
                  <Button className="text-white text-2xl font-bold">+</Button>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center bg-orange-500 p-1">
                  <Title className="text-white">according 2</Title>
                  <Button className="text-white text-2xl font-bold">+</Button>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center bg-orange-500 p-1">
                  <Title className="text-white">according 3</Title>
                  <Button className="text-white text-2xl font-bold">+</Button>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center bg-orange-500 p-1">
                  <Title className="text-white">according 4</Title>
                  <Button className="text-white text-2xl font-bold">+</Button>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center bg-orange-500 p-1">
                  <Title className="text-white">according 5</Title>
                  <Button className="text-white text-2xl font-bold">+</Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[30rem] bg-gray-400">Map</div>
      </main>
    </div>
  );
}
