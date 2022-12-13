import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import check from '../../images/check.png';
import no from '../../images/no.png';
import bill from '../../images/bill.png';
import book from '../../images/book.png';
import dance from '../../images/dance.png';
import doing from '../../images/doing.png';
import eat from '../../images/eat.png';
import gym from '../../images/gym.png';
import organize from '../../images/organize.png';

const todos = [
    { id: 1, task: 'Hit the gym', image: gym },
    { id: 2, task: 'Pay the bills', image: bill },
    { id: 3, task: 'Meet George', image: dance },
    { id: 4, task: 'Buy eggs', image: eat },
    { id: 5, task: 'Read a book', image: book },
    { id: 6, task: 'Organize the office', image: organize },
];
const status = {
    doing: doing,
    no: no,
    check: check,
};

const TodoList = () => {
    return (
        <section>
            <h1>To do list</h1>

            <ul>
                {todos.map((obj) => {
                    return (
                        <li key={obj.id}>
                            <TodoItem
                                task={obj.task}
                                image={obj.image}
                                status={status}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default TodoList;
