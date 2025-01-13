import { useState } from "react"
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({todo}) => {
    const [search, setSearch] = useState("")
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    const getSearchResult = () => {
        // 빈 입력값이 들어올 경우 전체 todo 표시
        // 입력값 있을 경우 해당 검색어 포함하는 컨텐츠만 표시
        return search === ""
            ? todo
            : todo.filter((it) => it.content.includes(search))
    }
    return(
        <div>
            <h3>Todo List 🌱</h3>
            <input 
                className="search" 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" 
            />
            <div>
                {/* 
                    todo의 내용을 map 함수 통해 컴포넌트로 반복 
                    전달받은 내용을 스프레드 연산자로 풀어서 props로 내보냄
                */}
                {getSearchResult().map((it) => (
                    // key를 각 요소의 id로 지정
                    <TodoItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    );
}
export default TodoList