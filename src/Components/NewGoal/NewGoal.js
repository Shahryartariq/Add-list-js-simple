import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './NewGoal.css';

const NewGoal = (props) =>{
    const [textenter, settextenter] = useState('')
    const addGoalHandler = (event) => {
        event.preventDefault();
        const sherry = {
            id: Math.random().toString(),
            msg: textenter
        }
        props.onAddGoal(sherry);
        settextenter('');
    };

    const textChangehandler = (event) => {
        settextenter(event.target.value);

    }
    return (
        <form className="Form_main" onSubmit={addGoalHandler}>
            <input type="text" value={textenter} onChange={textChangehandler}/>
            <button type="submit">Submit</button>

        </form>
    )
}

export default NewGoal


