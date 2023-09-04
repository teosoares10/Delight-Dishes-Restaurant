type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <section className="space-y-4 text-center bg-blue-600 px-20 py-28 shadow-md hover:shadow-lg hover:shadow-gray-700 shadow-gray-700 transition-shadow duration-500">
      <div>Image / icon</div>
      <h2 className="font-bold text-2xl capitalize">{title}</h2>
      <p>{description}</p>
    </section>
  );
}
