import React, { Fragment, useState } from "react";
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const Questions = (props) => {

    const [showInfo, setShowInfo] = useState(false);

    const toggleButtonHandler = () => {
        {showInfo ? (
            setShowInfo(false)
        ): (
            setShowInfo(true)
        )}
    }
    return(
        <article className="question">
            <header>
                <h4>{props.title}</h4>
                <button className="btn" onClick={toggleButtonHandler}>
                    {showInfo ? (
                        <AiOutlineMinusCircle />
                    ): (
                        <AiOutlinePlusCircle />
                    )}
                </button>
            </header>
            {showInfo && <p>{props.info}</p>}
        </article>
    );
};

export default Questions;