import './App.css';
import TodoCard from './Components/TodoCard';

function App() {
  return (
    <>
      <div class='text-4xl font-black text-center my-8'>
        <h3>To Do List</h3>
        <div class='my-10'>
          <TodoCard/>
        </div>
      </div>
    </>
  );
}

export default App;
