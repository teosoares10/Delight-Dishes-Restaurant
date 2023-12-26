import { Card } from '@/components/ui/card';
import { posts } from 'src/constants/Local/posts';

export default function OurPostList() {
  return (
    <ul className="flex justify-center space-x-4 flex-wrap">
      {posts
        .filter((post) => {
          return post.id < 4;
        })
        .map((post) => (
          <li
            key={post.id}
            className="w-96 shadow hover:shadow-xl hover:bg-white/50 delay-150 pb-2"
            data-testid="post-item"
          >
            <Card.Root className="">
              <Card.Img src={post.img} className="w-full h-[12rem]" />
              <div className="p-4 space-y-4">
                <Card.Date date={post.date} />
                <Card.Title title={post.title} className="text-left text-xl" />
                <Card.Content text={post.description} />
                <Card.Action link={`https://google.com`} text="read more" />
              </div>
            </Card.Root>
          </li>
        ))}
    </ul>
  );
}
