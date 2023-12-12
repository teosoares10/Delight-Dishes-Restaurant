import { posts } from '@/constants/Local/posts';
import Link from 'next/link';
import Img from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import Text from '@/components/ui/Typography/Text';
import { Button } from '../button';

export default function Posts() {
  return (
    <div className="px-12 py-24 space-y-16" data-testid="posts">
      <div>
        <Title className="text-4xl">Our Posts</Title>
      </div>
      <ul className="flex space-x-4">
        {posts.map((post) => (
          <li key={post.id} className="h-[12rem]" data-testid="post-item">
            <Img className="w-full h-full" src={post.img} alt="" />
            <div className="p-2 space-y-4">
              <span data-testid="date">{post.date}</span>
              <Link
                href=""
                className="block font-bold hover:text-orange-600"
                data-testid="link"
              >
                {post.title}
              </Link>
              <Text>{post.description}</Text>
              <Button
                className="capitalize hover:text-orange-600 bg-orange-600 text-white hover:bg-transparent hover:border-orange-600 hover:border delay-75"
                variant={'link'}
              >
                read more
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
