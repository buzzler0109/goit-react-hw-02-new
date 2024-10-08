import { useState, useEffect } from "react";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Options from "../options/Options";
import Notification from "../notification/Notification";

import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedStats = window.localStorage.getItem("stats");
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    } else
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });

  const updateFeedback = (value) => {
    setFeedback({
      ...feedback,
      [value]: feedback[value] + 1,
    });
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(feedback).reduce(
    (sum, value) => sum + value,
    0
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        onChange={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
