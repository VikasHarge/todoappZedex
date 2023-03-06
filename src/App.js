import logo from './logo.svg';
import './App.css';
import TodoFilter from './components/TodoFilter';
import TodoActions from './components/TodoActions';

function App() {
  return (
    <div className='w-full h-[100vh] bg-[#EA5959] flex items-center justify-center font-lato' >
      <div className='w-[983px] h-[702px] bg-[#ffffff] rounded-lg shadow-10xl flex' >
        <TodoFilter/>
        <TodoActions/>
      </div>
    </div>
  );
}

export default App;
