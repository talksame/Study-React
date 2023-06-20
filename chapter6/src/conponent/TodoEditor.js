import "./TodoEditor.css"

const TodoEditor = () => {
    return (
        <div className="TodoEditor">
            <h4>새로운 TODO 작성하기👍</h4>
            <div className="Editor_wrapper">
                <input placeholder="새로운 todo..."></input>
                <button>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor
