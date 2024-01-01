type CardProps = {
  date: string;
};

export function CardDate({ date }: CardProps) {
  return <span className="text-sm">{date}</span>;
}
