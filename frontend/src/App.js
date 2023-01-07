import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {

  const [tasks, setTask] = useState([])

  console.log(tasks);
  return (
    <div className="App">

      <Form setTask={(newTask) => { setTask([...tasks, newTask])}}/>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
