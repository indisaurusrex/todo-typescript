import { ChangeEvent } from 'react';
import { TTodo } from './App';

interface ITodoRowProps {
  item: TTodo;
  handleCheckboxChange: (choice: boolean, id: number) => void;
}

function TodoRow({ item, handleCheckboxChange }: ITodoRowProps) {
  return (
    <li>
      {item.title}
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCheckboxChange(e.target.checked, item.id)
        }
      />
    </li>
  );
}

export default TodoRow;
