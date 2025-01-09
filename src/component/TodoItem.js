import React from "react"
import "./TodoItem.css"

const TodoItem = () => {
    return(
        <div className="todo-item">
            <input type="checkbox" />
            <span>React 공부하기</span>
            <span>2024. 1. 2.</span>
            <button>삭제</button>
        </div>
    );
}
export default TodoItem