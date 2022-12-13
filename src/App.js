import './App.css';
import Addtodo from './components/Addtodo/Addtodo';
import Booklist from './components/Booklist/Booklist';
import Cars from './components/Cars/Cars';
import Carslist from './components/Carslist/Carslist';
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
      <hr></hr>
      <Cars />
      <Carslist />
      <hr></hr>
      <Booklist />
    </div>
  );
}

export default App;
