import Title from '@/components/ui/title';
import OurPostList from '@/components/ui/our-post-list';

export default function OurPosts() {
  return (
    <div className="py-24 px-12 space-y-16">
      <Title className="text-4xl">Our Posts</Title>
      <OurPostList />
    </div>
  );
}
