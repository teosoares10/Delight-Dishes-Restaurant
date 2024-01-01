export function NumberOfGuest({ value }: { value: string }) {
  return (
    <option value={value} className="hover:bg-orange-500">
      {value}
    </option>
  );
}
