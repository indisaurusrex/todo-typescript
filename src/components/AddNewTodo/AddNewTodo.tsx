import { TTodo } from '../../App';
import { useState, ChangeEvent } from 'react';

interface IAddNewTodoProps {
  handleNewTodo: (todo: Omit<TTodo, 'id'>) => void;
}

function AddNewTodo({ handleNewTodo }: IAddNewTodoProps) {
  const [newTitle, setNewTitle] = useState<string>('');

  const handleSubmit = (): void => {
    handleNewTodo({title: newTitle, done: false});
    setNewTitle('');
  }

  return (
    <div>
      <input type="text" value={newTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddNewTodo;
