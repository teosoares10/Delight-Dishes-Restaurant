import Title from '../Typography/Title';
import OurPostList from './components/OurPostList';

export default function OurPosts() {
  return (
    <div className="py-24 px-12 space-y-16" data-testid="our-posts">
      <Title className="text-4xl">Our Posts</Title>
      <OurPostList />
    </div>
  );
}
