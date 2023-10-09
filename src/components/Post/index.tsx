import { posts } from '@/db/Local/posts';
import PostItem from './components/PostItem';
import Img from '../Image';

export default function Posts() {
  return (
    <div className="mt-24 px-12 pt-24 space-y-4">
      <div>
        <h2>Our Posts</h2>
      </div>
      <ul className="flex justify-between">
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem
              className="w-[18rem] h-[15rem]"
              img={
                <Img
                  className="w-full h-full"
                  src={post.img}
                  alt=""
                  width={300}
                  height={250}
                />
              }
              date={post.date}
              title={post.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
