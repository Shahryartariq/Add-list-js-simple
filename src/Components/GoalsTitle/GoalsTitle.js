import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./GoalsTitle.css";
import GoalsList from "../GoalsList/GoalsList";
import NewGoal from "../NewGoal/NewGoal";

const GoalsTitle = () => {
  // React donot re render we use states
  // state return 2 values array, varaible for modification
  const [goalsArray, setCourseGoals] = useState([
    {
      id: 1,
      msg: "Complete this course",
    },
    {
      id: 2,
      msg: "Learn As much As possible",
    },
    {
      id: 3,
      msg: "Share This course with your friends",
    },
    {
      id: 4,
      msg: "Become An expert in MERN Stack",
    },
  ]);

  const add_sherry = (arrayToAdd) => {
    // goalsArray.push(arrayToAdd);
    // setCourseGoals(goalsArray.concat(arrayToAdd))
    // best approach
    setCourseGoals((goalsArray)=>{
        return goalsArray.concat(arrayToAdd)
    });
    console.log(goalsArray);
  };

  return (
    <div className="main_page">
      <h2>Sherry</h2>
      <NewGoal onAddGoal={add_sherry} />
      <GoalsList goals={goalsArray} />
    </div>
  );
};

export default GoalsTitle;
