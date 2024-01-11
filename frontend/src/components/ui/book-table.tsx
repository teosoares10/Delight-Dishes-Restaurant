import BookTableForm from '@/components/ui/book-table-form';
import Title from '@/components/ui/title';

export default function BookTable() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gray-300 mt-32 py-4">
      <Title className="text-3xl">book a table</Title>
      <BookTableForm />
    </div>
  );
}
