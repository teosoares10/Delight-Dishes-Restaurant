import Image from 'next/image';

type ImgProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export default function Img({ src, width, height, alt }: ImgProps) {
  return <Image src={src} width={width} height={height} alt={`${alt}`} />;
}
