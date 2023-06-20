import './App.css';
import Header from './conponent/Header';
import TodoEditor from './conponent/TodoEditor';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <TodoEditor></TodoEditor>
      <div>Todo List</div>
    </div>
  );
}

export default App;
