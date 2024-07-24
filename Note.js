import React, { useState } from "react";


function Note({ note, onHandleDelete, onHandlePin }) {
  const [showPin, setShowPin] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal((open) => !open);
  }

  return (
    <React.Fragment>
      <li
        key={note.id}
        className="group/notelist notelist relative grid cursor-pointer grid-cols-12 items-start"
      >
        <button
          className={
            (showPin ? "visible" : "invisible") +
            " col-span-1 flex h-full items-start pt-1.5 hover:transition-all group-hover/notelist:visible"
          }
          onClick={() => {
            setShowPin(!showPin);
            onHandlePin(note.id);
          }}
        >
          {showPin ? (
            <img src="../../Components/images/blue_pin.svg" alt="Pin" />
          ) : (
            <img
              src="../../Components/images/black_pin.svg"
              alt="Pin"
              className="opacity-[.18]"
            />
          )}
        </button>
        <div className="col-span-10 w-[700px]">
          <h1 className="line-h relative mb-3 w-3/4 text-[27px] font-bold leading-9 text-heading">
            {note.heading}
          </h1>
          <div className="flex justify-between">
            <h3 className="relative flex items-center ps-11 text-lg text-[#bbb]">
              <i className="absolute left-0 top-0" onClick={toggleModal}>
                <img src="../../Components/images/add_person.svg" alt="Pin" />
              </i>

              {note.founder}
            </h3>
            <p className="text-sm italic leading-9 text-[#bbb]">
              {note.duration}
            </p>
          </div>
        </div>
        <button
          className="invisible col-span-1 ms-auto pt-1.5 group-hover/notelist:visible"
          onClick={() => onHandleDelete(note.id)}
        >
          <img src="../../Components/images/delete.svg" alt="Pin" />
        </button>
      </li>
    </React.Fragment>
  );
}

export default Note;
