import './App.css';
import Addtodo from './components/Addtodo/Addtodo';
import Header from './components/Header/Header';
import Mainprovider from './components/Mainprovider/Mainprovider';
import Todolist from './components/Todolist/Todolist';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainprovider />
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
