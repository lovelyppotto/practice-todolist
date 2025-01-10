import { useState } from "react"
import "./TodoCreator.css"

const TodoCreator = ({onCreate}) => {
    const [content, setContent] = useState("")
    const onChangeContents = (e) => {
        setContent(e.target.value)
    }
    return(
        <div className="container">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="input-box">
                <input onChange={onChangeContents} placeholder="새로운 Todo..."/>
                <button className="create-button">추가</button>
            </div>
        </div>
    );
}
export default TodoCreator