const Feedback = ({ values, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {totalFeedback}</p>
      {totalFeedback > 0 && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
};

export default Feedback;
