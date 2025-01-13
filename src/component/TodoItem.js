import React from "react"
import "./TodoItem.css"

// props로 받은 내용을 인자로 전달받아 각 위치에 사용
const TodoItem = ({ id, content, isDone, createdDate }) => {
    return(
        <div>
            <div className="todo-items">
                <div className="left">
                    <input checked={isDone} type="checkbox" className="checkbox" />
                    <span>{content}</span>
                </div>
                <div className="right">
                    <span className="date">
                        {new Date(createdDate).toLocaleDateString()}
                    </span>
                    <button className="delete">삭제</button>
                </div>
            </div>
            <hr />
        </div>

    );
}
export default TodoItem