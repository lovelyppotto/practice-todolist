import React from "react"
import "./TodoCreator.css"

const TodoCreator = () => {
    return(
        <div className="container">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="input-box">
                <input placeholder="새로운 Todo..."/>
                <button className="create-button">추가</button>
            </div>
        </div>
    );
}
export default TodoCreator