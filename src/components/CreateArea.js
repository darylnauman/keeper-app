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

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Title"
                name="title"
            />
            <textarea
                onChange={handleChange}
                placeholder="Take a note..."
                name="content"
                rows="3"
            />
            <button
                onClick={() => {
                    props.onAdd(note);
                    setNote({ title: "", content: "" });
                }}
            >
              Add
            </button>
        </form>
    );
};

export default CreateArea;
