import './App.css';
import Addtodo from './components/Addtodo/Addtodo';
import Booklist from './components/Booklist/Booklist';
import Booklistadd from './components/Booklistadd/Booklistadd';
import Cars from './components/Cars/Cars';
import Carsadd from './components/Carsadd/Carsadd';
import Carslist from './components/Carslist/Carslist';
import Coffelist from './components/Coffelist/Coffelist';
import Header from './components/Header/Header';
import Mainprovider from './components/Mainprovider/Mainprovider';
import Todolist from './components/Todolist/Todolist';
import Watchlist from './components/Watchlist/Watchlist';
import Coffeeadd from './components/Coffeeadd/Coffeeadd';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainprovider />
      <Addtodo />
      <Todolist />
      <hr></hr>
      <Cars />
      <Carsadd />
      <Carslist />
      <hr></hr>
      <Booklistadd />
      <Booklist />
      <hr></hr>
      <Coffeeadd />
      <Coffelist />
      <hr></hr>
      <Watchlist />
    </div>
  );
}

export default App;
