import Link from 'next/link';
import Title from './title';
import Input from './input';
import Text from './text';

export function FindTable() {
  return (
    <div>
      <Link href="" />
      <Title>Reservation at Delight Dishes</Title>

      <ol type="1">
        <li className="uppercase">find a table</li>
        <li className="uppercase">your details</li>
      </ol>

      <div>
        <form action="" className="flex">
          <select>
            <option value="">1 Person</option>
            <option value="">2 Person</option>
            <option value="">3 Person</option>
            <option value="">4 Person</option>
          </select>
          <Input type="date" />
          <Input type="time" />
          <Input type="submit" />
        </form>
        <span>
          At the moment, there&apos;s no online avalibility within 2.5 hours of
          11:30 pm.
        </span>
      </div>

      <div>
        <span>Future availibility around 11:30 pm</span>
        <ul>
          <li>
            <Text>Friday, 29 December 2023</Text>
            <ul className="flex">
              <li>
                <Text>3:45 pm</Text>
              </li>
              <li>
                <Text>3:45 pm</Text>
              </li>
              <li>
                <Text>3:45 pm</Text>
              </li>
              <li>
                <Text>3:45 pm</Text>
              </li>
              <li>
                <Text>3:45 pm</Text>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
