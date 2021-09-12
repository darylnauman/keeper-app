import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  
  const [notes, setNotes] = useState([]);
  
  const addNote = (note) => {
    console.log("in addNote")
    // setNotes((prevValue) => ({
    //   ...prevValue,
    //   note
    // }))
  }

  return (
        <div>
            <Header />

            <CreateArea onAdd={addNote}/>

            {/* {notes.map((note) => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))} */}

            <Footer />
        </div>
    );
};

export default App;
