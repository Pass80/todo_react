import React, { useRef } from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
    const imageRef = useRef();
    const textRef = useRef();

    let statusIcon = props.status.no;

    const doneHandler = (e) => {
        if (statusIcon === props.status.no) {
            imageRef.current.src = props.status.doing;
            textRef.current.style.textDecoration = 'none';
            statusIcon = props.status.doing;
        } else if (statusIcon === props.status.doing) {
            imageRef.current.src = props.status.check;
            textRef.current.style.textDecoration = 'line-through';
            statusIcon = props.status.check;
        } else {
            imageRef.current.src = props.status.no;
            textRef.current.style.textDecoration = 'underline';
            statusIcon = props.status.no;
        }
    };
    return (
        <div className="item" onClick={doneHandler}>
            <img
                className="no"
                ref={imageRef}
                src={props.status.no}
                alt="status"
            />

            <p ref={textRef}>{props.task}</p>
            <img src={props.image} alt="" />
        </div>
    );
};

export default TodoItem;
