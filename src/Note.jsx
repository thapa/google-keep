import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="relative">
        <div className="min-h-[200px] bg-gray-300 p-10">
          <button
            onClick={deleteNote}
            className="w-10 h-10 bg-red-500 text-white font-bold rounded-full absolute right-5 top-5 hover:bg-green-600">
            X
          </button>
          <h3 className="text-3xl font-bold mb-5">{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default Note;
