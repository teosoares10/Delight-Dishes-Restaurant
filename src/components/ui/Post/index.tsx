import { posts } from '@/constants/Local/posts';
import Link from 'next/link';
import Img from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import Text from '@/components/ui/Typography/Text';

export default function Posts() {
  return (
    <div className="mt-24 px-12 pt-24 space-y-16" data-testid="posts">
      <div>
        <Title className="text-4xl">Our Posts</Title>
      </div>
      <ul className="flex space-x-4">
        {posts.map((post) => (
          <li key={post.id} data-testid="post-item">
            <Img
              className="w-full h-full"
              src={post.img}
              alt=""
              width={300}
              height={100}
            />
            <div className="mt-2 space-y-4">
              <span data-testid="date">{post.date}</span>
              <Link
                href=""
                className="block font-bold hover:text-orange-600"
                data-testid="link"
              >
                {post.title}
              </Link>
              <Text>{post.description}</Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
