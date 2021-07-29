import React, { useState } from 'react';
import './App.css';

type TTodo = {
  title: string;
  location?: string;
}
interface IAppProps {
  todos: Array<TTodo>;
}

function App({todos}: IAppProps): JSX.Element {
  const [items, setItems] = useState<Array<TTodo>>(todos);

  if (!items) {
    setItems([{title: "This is a stand in todo"}]);
  }
  
  const listOfItems = items.map((item) => {
    return <p>{item.title}</p>
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {listOfItems}
        </p>
      </header>
    </div>
  );
}

export default App;
