import React, { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [title, settitle] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [task, setTask] = useState([]);

  const formSubmission = (grab) => {
    grab.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, description });

    setTask(copyTask);

    settitle(" ");
    setdescription(" ");
  };
  const deletingCard = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx ,1)
    setTask(copyTask)
  };
  return (
    <div className="bg-black min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-5 p-4">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={(e) => {
            formSubmission(e);
          }}
          className=" flex flex-col justify-center gap-8 w-full max-w-md "
        >
          <h1 className="text-cyan-50 font-medium px-4">Write Your Notes</h1>
          <input
            className="w-full px-4 py-5 outline-none border border-black-100 rounded-3xl text-cyan-50"
            type="text"
            value={title}
            placeholder="Enter Task"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <textarea
            className="w-full  min-h-[120px] max-h-[240px] resize-y overflow-auto px-4 py-5 outline-none border border-black-100 rounded-3xl text-cyan-50"
            type="text"
            placeholder="Enter Details"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <button
            className="w-full px-4 py-5 outline-none border border-black-100 rounded-3xl text-cyan-50"
            type="submit"
          >
            Add Note
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 min-h-[300px] flex flex-col items-start">
        <h1 className="text-cyan-50 font-medium px-4 mt-2">Your Notes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-4 w-full">
          {task.map((e, index) => {
            return (
              <Card
                key={index}
                id={index}
                onDelete={deletingCard}
                title={e.title}
                description={e.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
