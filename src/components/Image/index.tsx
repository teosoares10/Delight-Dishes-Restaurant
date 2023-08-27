import Image from 'next/image';

type ImgProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export default function Img({ src, width = 300, height = 500, alt }: ImgProps) {
  return (
    <Image
      className="bg-slate-600"
      src={src}
      width={width}
      height={height}
      alt={`${alt}`}
    />
  );
}
