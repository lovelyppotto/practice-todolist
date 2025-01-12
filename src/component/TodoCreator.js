import { useState, useRef } from "react"
import "./TodoCreator.css"

const TodoCreator = ({onCreate}) => {
    const [content, setContent] = useState("")
    const inputRef = useRef()
    const onChangeContents = (e) => {
        setContent(e.target.value)
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus()
            return
        }
        onCreate(content)
    }
    return(
        <div className="container">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="input-box">
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContents} 
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit} className="create-button">추가</button>
            </div>
        </div>
    );
}
export default TodoCreator