import React from "react"
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = () => {
    return(
        <div>
            <h3>Todo List 🌱</h3>
            <input className="search" placeholder="검색어를 입력하세요" />
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}
export default TodoList