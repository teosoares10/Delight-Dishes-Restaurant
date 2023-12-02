import Title from '@/components/ui/Typography/Title';
import ImageItem from './components/ImageItem';

export default function Instagram() {
  return (
    <div className="space-y-4">
      <Title className="text-xl text-left">instagram</Title>
      <ul className="grid grid-cols-3 gap-4">
        <li>
          <ImageItem />
        </li>
        <li>
          <ImageItem />
        </li>
        <li>
          <ImageItem />
        </li>
        <li>
          <ImageItem />
        </li>
        <li>
          <ImageItem />
        </li>
        <li>
          <ImageItem />
        </li>
      </ul>
    </div>
  );
}
