import { useState } from 'react';
import './App.css';
import Boards from './components/Boards/Boards';
import AddTodo from './components/Boards/AddTodo/AddTodo';
import Cards from './components/Cards/Cards';

const initialDesk = {
  name: '',
  cards: [],
  active: false,
}

const App = () => {
  const [activeDesk, setActiveDesk] = useState<any>(initialDesk);

  return (
    <div className="App">
      <Boards activeDesk={activeDesk} setActiveDesk={setActiveDesk} />
      {activeDesk.name && <AddTodo activeDesk={activeDesk} />}
      {activeDesk.name && <Cards activeDesk={activeDesk} />}
    </div>
  );
}

export default App;