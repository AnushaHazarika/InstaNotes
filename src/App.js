import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Editor from './Editor';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () =>{
    console.log("Add new note");
  };

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Editor />
    </div>
  );
}

export default App;
