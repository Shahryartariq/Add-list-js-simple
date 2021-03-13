import React from 'react';
import ReactDOM from 'react-dom';
import './GoalsList.css';


const GoalsList = (props) =>{
    // console.log(props.goals)
    return (
        <div className="Goals_list">
            <ul>
                {props.goals.map(goals => {
                    return <li key={goals.id}>{goals.msg}</li>
                }
                )
            }
            </ul>
        </div>
    )
}

export default GoalsList;
