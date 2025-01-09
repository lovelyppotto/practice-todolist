import './App.css';
import Calendar from './component/Calendar';
import TodoCreator from './component/TodoCreator';
import TodoList from './component/TodoList';

function App() {
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
