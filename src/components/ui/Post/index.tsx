import { posts } from '@/constants/Local/posts';
import Link from 'next/link';
import Img from '@/components/ui/Image';
import Title from '../ui/Typography/Title';
import Text from '../ui/Typography/Text';

export default function Posts() {
  return (
    <div className="mt-24 px-12 pt-24 space-y-16" data-testid="posts">
      <div>
        <Title className="text-4xl">Our Posts</Title>
      </div>
      <ul className="flex justify-between">
        {posts.map((post) => (
          <li key={post.id} data-testid="post-item">
            <Img
              className="w-full h-full"
              src={post.img}
              alt=""
              width={300}
              height={250}
            />
            <div className="space-y-4">
              <span data-testid="date">{post.date}</span>
              <Link
                href=""
                className="block font-bold hover:text-orange-600"
                data-testid="link"
              >
                {post.title}
              </Link>
              {post.description ? <Text>{post.description}</Text> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
