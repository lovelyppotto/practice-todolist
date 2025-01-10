import { useState } from "react";

import './App.css';
import Calendar from './component/Calendar';
import TodoCreator from './component/TodoCreator';
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
]

function App() {
  const [ todo, setTodo ] = useState(mockTodo)

  return (
    <div className="App">
      <section>
        <Calendar />
      </section>
      <section>
        <TodoCreator />
      </section>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
