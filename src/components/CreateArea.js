import React, { useState } from "react";

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const submitNote = (event) => {
      props.onAdd(note);
      event.preventDefault();
      setNote({title:"", content:""})
    }

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Title"
                name="title"
                value={note.title}
            />
            <textarea
                onChange={handleChange}
                placeholder="Take a note..."
                name="content"
                rows="3"
                value={note.content}
            />
            <button
                onClick={submitNote}
            >
              Add
            </button>
        </form>
    );
};

export default CreateArea;
