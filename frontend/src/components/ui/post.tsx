import Img from '@/components/ui/image';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Comment from './comment';

type PostProps = {
  img: string;
  alt?: string;
  title: string;
  date: string;
  description: string;
  comments: [];
  className?: string;
};

export default function Post({
  img,
  alt,
  title,
  date,
  description,
  comments
}: PostProps) {
  return (
    <>
      <Img className="w-full h-[12rem]" src={img} alt={alt} />
      <div className="p-4 space-y-4">
        <div>
          <Title className="text-left text-xl">{title}</Title>
          <span className="text-sm" data-testid="date">
            {date}
          </span>
        </div>
        <Text className="text-black/60">{description}</Text>
        {comments ? (
          <ul>
            <li>
              <Comment author={'comment.author'} content={'comment.content'} />
            </li>
            <li>
              <Comment author={'comment.author'} content={'comment.content'} />
            </li>
            <li>
              <Comment author={'comment.author'} content={'comment.content'} />
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}
