import { useState, useRef } from "react";

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

  // id 값을 자동으로 관리할 Ref 객체
  const idRef = useRef(3)

  // todo 추가버튼 누를 시 실행될 핸들러 함수
  // 데이터를 받아 매개변수 content에 저장하고
  // 해당 데이터 기반으로 객체 newItem에 저장
  const onCreate = (content) => {
    const newItem = {
      // 아이템이 처음 추가된다면 id는 3이 된다
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    }
    // 배열의 스프레드 연산자 활용
    // State 변수 todo 업데이트
    setTodo([newItem, ...todo])
    // 아이템 추가될 때마다 idRef 객체의 현재 값을 1 
    idRef.current += 1
  }

  // 체크박스에 틱 발생시 호출하는 함수
  // 틱이 발생한 아이템의 id를 매개변수로 저장
  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => {
          // 
          if (it.id === targetId) {
            return {
              ...it,
              isDone: !it.isDone,
            }
          }
            else {return it}
        }
      )
    )
  }

  // 아이템 삭제 함수
  // 해당 id 요소를 뺀 새 배열로 todo를 업데이트한다
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId))
  }

  return (
    <div className="App">
      <section>
        <Calendar />
      </section>
      <section>
        <TodoCreator onCreate={onCreate} />
      </section>
      <section>
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      </section>
    </div>
  );
}

export default App;
