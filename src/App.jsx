import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  // creating an array of Items
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldValue) => {
      return [...oldValue, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currItem, index) => {
        return index !== id;
      });
    });
    console.log(addItem);
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="grid grid-cols-3 gap-10 max-w-5xl mx-auto py-10">
        {addItem.map((curr, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={curr.title}
              content={curr.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
