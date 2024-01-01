import { Card } from './card';

type CommentProps = {
  author: string;
  content: string;
};
export default function Comment({ author, content }: CommentProps) {
  return (
    <Card.Root>
      <Card.Title title={author} />
      <Card.Content content={content} />
    </Card.Root>
  );
}
