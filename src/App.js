import logo from './logo.svg';
import './App.css';
import TodoBox from './components/TodoBox';
import TodoActions from './components/TodoActions';

function App() {
  return (
    <div 
      className='w-full h-[100vh] bg-[#EA5959] flex items-center justify-center font-lato' 
    >
        <TodoBox/>
    </div>
  );
}

export default App;
