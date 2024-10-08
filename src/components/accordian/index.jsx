import React, { useState } from "react";
import data from "./data";
import "./style.css";

// Single Selection Accordian

// Multi selection Accordian
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelecton(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
            let cpyMultiple = [...multiple]
            const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
  
            if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
              else  cpyMultiple.splice(findIndexOfCurrentId, 1)

            setMultiple(cpyMultiple)
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () =>handleMultiSelection(dataItem.id)
                    : () => handleSingleSelecton(dataItem.id)
                }
                className="title"
              >
                <h3> {dataItem.question}</h3>
                <span> + </span>
                <div className="content">
                  {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                    <div> {dataItem.answer} </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div> No Data Found! </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
