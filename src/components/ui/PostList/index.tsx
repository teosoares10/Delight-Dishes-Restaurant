import { posts } from '@/constants/Local/posts';
import Link from 'next/link';
import Img from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import Text from '@/components/ui/Typography/Text';
import { Button } from '../button';

export default function Posts() {
  return (
    <ul className="flex space-x-4 flex-wrap" data-testid="posts">
      {posts.map((post) => (
        <li
          key={post.id}
          className="w-96 shadow hover:shadow-xl hover:bg-white/50 delay-150 pb-2"
          data-testid="post-item"
        >
          <Img className="w-full h-[12rem]" src={post.img} alt="" />
          <div className="p-4 space-y-4">
            <div>
              <Title className="text-left text-xl">{post.title}</Title>
              <span className="text-sm" data-testid="date">
                {post.date}
              </span>
            </div>
            <Text className="text-black/60">{post.description}</Text>
            <Button className="text-orange-600" variant={'link'} asChild>
              <Link
                href=""
                className="capitalize bg-orange-600 text-white hover:bg-transparent hover:text-orange-600 hover:border-orange-600 hover:border delay-75 block font-bold"
                data-testid="link"
              >
                read more
              </Link>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
