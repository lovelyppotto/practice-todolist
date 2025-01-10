import React from "react"
import "./TodoItem.css"

const TodoItem = () => {
    return(
        <div>
            <div className="todo-items">
                <div className="left">
                    <input type="checkbox" className="checkbox" />
                    <span>React 공부하기</span>
                </div>
                <div className="right">
                    <span className="date">2024. 1. 2.</span>
                    <button className="delete">삭제</button>
                </div>
            </div>
            <hr />
        </div>

    );
}
export default TodoItem