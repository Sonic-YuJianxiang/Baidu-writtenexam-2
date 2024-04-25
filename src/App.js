import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = () => {
    const newNotes = [...notes, { id: Date.now(), content: currentNote }];
    setNotes(newNotes);
    setCurrentNote('');
  };

  const updateNote = (id, content) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, content: content } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search notes..."
      />
      <div>
        {notes.filter(note => note.content.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(note => (
            <div key={note.id}>
              <textarea
                value={note.content}
                onChange={(e) => updateNote(note.id, e.target.value)}
              />
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          ))}
      </div>
      <textarea value={currentNote} onChange={(e) => setCurrentNote(e.target.value)} placeholder="Enter a new note..."/>
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default App;
