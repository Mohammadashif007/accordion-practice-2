import { useState } from "react";
import accordionData from "./data";
import "./style.css"

const Accordion = () => {
    const [singleSelection, setSingleSelection] = useState(null);
    const handleSingleSelection = (currentId) => {
        setSingleSelection(currentId === singleSelection ? null: currentId);
    };
    return (
        <div className="wrapper">
            <div className="accordion">
                {accordionData.map((dataItem) => (
                    <div key={dataItem.id} className="item">
                        <div
                            onClick={() => handleSingleSelection(dataItem.id)}
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {singleSelection === dataItem.id ? (
                            <div className="content">{dataItem.answer}</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
