import { useState } from "react";
import accordionData from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] =
        useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    };

    console.log(enableMultipleSelection, multiple);
    return (
        <div className="wrapper">
            <button
                onClick={() =>
                    setEnableMultipleSelection(!enableMultipleSelection)
                }
            >
                Enable Multiple Selection
            </button>
            <div className="accordion">
                {accordionData && accordionData.length > 0 ? (
                    accordionData.map((dataItem) => (
                        <div key={dataItem.id} className="item">
                            <div
                                onClick={
                                    enableMultipleSelection
                                        ? () =>
                                              handleMultiSelection(dataItem.id)
                                        : () =>
                                              handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultipleSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                      <div className="content">
                                          {dataItem.answer}
                                      </div>
                                  )
                                : selected === dataItem.id && (
                                      <div className="content">
                                          {dataItem.answer}
                                      </div>
                                  )}
                            {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null} */}
                        </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
