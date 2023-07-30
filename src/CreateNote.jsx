import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    // This is same as above but it is call Object Desstructing

    const { name, value } = event.target;

    setNote((oldVlaue) => {
      return {
        ...oldVlaue,
        [name]: value,
      };
    });

    //console.log(note);
  };

  const addEvent = () => {
    props.passNote(note); // It would not come automatic

    setNote({
      title: "",
      content: "",
    });
  };

  const expandElem = () => {
    setExpand(true);
  };

  const closeElem = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="bg-green-100 text-center p-10">
        <h1 className="mb-10 font-bold uppercase">Create Note</h1>
        <div className="mx-auto max-w-md bg-white p-10 rounded-lg">
          <div className="block space-y-3">
            {expand ? (
              <input
                placeholder="Eneter Title"
                value={note.title}
                name="title"
                onChange={InputEvent}
                className="border border-gray-500 p-5 w-full"
              />
            ) : null}

            <textarea
              placeholder="Write a note"
              autoComplete="off"
              name="content"
              value={note.content}
              onChange={InputEvent}
              onClick={expandElem}
              onDoubleClick={closeElem}
              className="border border-gray-500 p-5 w-full"></textarea>
            {expand ? (
              <button
                onClick={addEvent}
                className="py-3 px-10 bg-red-500 text-white hover:bg-green-600 w-full">
                Create Note
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
