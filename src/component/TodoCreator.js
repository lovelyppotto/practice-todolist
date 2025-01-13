import { useState, useRef } from "react"
import "./TodoCreator.css"

const TodoCreator = ({onCreate}) => {
    const [content, setContent] = useState("")
    const inputRef = useRef()
    const onChangeContents = (e) => {
        setContent(e.target.value)
    }
    const onSubmit = () => {
        // 만약 내용이 비어있다면
        if (!content) {
            // 해당 input 포커스되도록
            inputRef.current.focus()
            return // 아래 코드는 실행하지 않고 종료
        }
        onCreate(content)
        // 추가 후 input 값 초기화
        setContent("")
    }

    // 키보드 입력 이벤트
    const onKeyDown = (e) => {
        // 이벤트 발생한 키코드가 13(Enter)일 경우
        if (e.keyCode === 13) {
            // 할일 추가 함수 실행
            onSubmit()
        }
    }

    return(
        <div className="container">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="input-box">
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContents} 
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit} className="create-button">추가</button>
            </div>
        </div>
    );
}
export default TodoCreator