import { cormorantInfant } from '../../../public/fonts';
import { Button } from '../ui/button';

export default function Banner() {
  return (
    <div className="h-screen bg-gray-500 bg-[url('https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover">
      <div className="w-screen h-screen flex flex-col justify-center items-center text-center space-y-8 bg-black bg-opacity-60">
        <h1
          style={cormorantInfant.style}
          className="tracking-[1.8rem] text-8xl uppercase"
        >
          Welcome
        </h1>
        <p className="w-[35rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa
          possimus? Eum dolorem, a excepturi ipsum optio in molestiae ullam hic,
          suscipit officia distinctio ipsam sequi. Vitae vel labore quam.
        </p>
        <Button className="w-40 bg-cyan-700 capitalize" variant="link">
          view menu
        </Button>
      </div>
    </div>
  );
}
