import React, { useState } from 'react';
// import './App.css';
import styles from './App.module.css';
import todoStartList from './todoStartList';
import AddNewTodo from './AddNewTodo';
import TodoRow from './TodoRow';

type TTodo = {
  id: number;
  title: string;
  location?: string;
  done: boolean;
};
interface IAppProps {
  todos: Array<TTodo>;
}

function App({ todos }: IAppProps): JSX.Element {
  const [items, setItems] = useState<Array<TTodo>>(todos);

  const generateId = (): number => {
    const newId = Math.max(...items.map((o) => o.id));
    return newId + 1;
  };

  const handleCheckboxChange = (choice: boolean, id: number) => {
    let foundItemIndex = items.findIndex((item) => item.id === id);
    const updatedItem = { ...items[foundItemIndex], done: choice };
    setItems([
      ...items.slice(0, foundItemIndex),
      updatedItem,
      ...items.slice(foundItemIndex + 1),
    ]);
  };

  const handleRemoveTodo = (id: number) => {
    let foundItemIndex = items.findIndex((item) => item.id === id);
    let updatedItems = [...items];
    updatedItems.splice(foundItemIndex, 1);
    setItems(updatedItems);
  };

  const listOfItems = items.map((item) => {
    return (
      <TodoRow
        item={item}
        handleCheckboxChange={handleCheckboxChange}
        handleRemoveTodo={handleRemoveTodo}
      />
    );
  });

  const handleNewTodo = (newTodo: Omit<TTodo, 'id'>) => {
    setItems([...items, { ...newTodo, id: generateId() }]);
  };

  return (
    <div className={styles.app}>
      <div className={styles.cardContainer}>
        <header className={styles.root}>
          <ul className={styles.ul}>{listOfItems}</ul>
          <AddNewTodo handleNewTodo={handleNewTodo} />
        </header>
      </div>
    </div>
  );
}

export default App;
export type { TTodo };

App.defaultProps = {
  todos: todoStartList,
};
