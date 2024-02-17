import { useState } from "react";
import accordionData from "./data";
import "./style.css";

const Accordion = () => {
    const [singleSelection, setSingleSelection] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleMultiSelection = (currentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    };

    const handleSingleSelection = (currentId) => {
        setSingleSelection(currentId === singleSelection ? null : currentId);
    };

    console.log( multiple);

    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            >
                Enable Multi Selection
            </button>
            <div className="accordion">
                {accordionData.map((dataItem) => (
                    <div key={dataItem.id} className="item">
                        <div
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {singleSelection === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                            <div className="content">{dataItem.answer}</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
