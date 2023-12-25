import BookTableForm from './BookTableForm';
import Title from './Title';

export default function BookTable() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-gray-300 mt-32 py-32">
      <Title className="text-3xl">book a table</Title>
      <BookTableForm />
    </div>
  );
}
