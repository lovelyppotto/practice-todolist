import { useReducer, useRef } from "react";

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

function reducer( state, action ) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state]
    }
    case "UPDATE": {
      // map 메서드로 순회하며 매개변수 state에 저장된 아이템 배열에서
      return state.map((it) => 
        // 타겟 id와 id 비교
        it.id === action.targetId
        // 새 배열 반환
        ? {
          ...it,
          isDone: !it.isDone,
        }
        :it
      )
    }
    case "DELETE": {
      // 필터링한 결과를 배열로 반환
      return state.filter((it) => it.id !== action.targetId)
    }
    default : return state
  }
}

function App() {
  const [ todo, dispatch ] = useReducer(reducer, mockTodo)

  // id 값을 자동으로 관리할 Ref 객체
  const idRef = useRef(3)

  // todo 추가버튼 누를 시 실행될 핸들러 함수
  const onCreate = (content) => {
    // 새 할일 생성 위해 dispatch 호출
    dispatch({
      type: "CREATE",
      // 추가할 할일
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      }
    })
    idRef.current += 1
  }

  // 체크박스에 틱 발생시 호출하는 함수
  // 틱이 발생한 아이템의 id를 매개변수로 저장
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,

    })
  }

  // 아이템 삭제 함수
  // 해당 id 요소를 뺀 새 배열로 todo를 업데이트한다
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
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
