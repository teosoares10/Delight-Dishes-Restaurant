import Form from './Form';
import Title from './Typography/Title';

export default function BookTable() {
  return (
    <div
      className="flex flex-col gap-8 justify-center items-center bg-gray-300 mt-32 py-32"
      data-testid="book-table"
    >
      <Title className="text-3xl">book a table</Title>
      <Form />
    </div>
  );
}
