const Options = ({ onChange, totalFeedback, onReset }) => {
  const handleClick = (value) => () => {
    onChange(value);
  };
  return (
    <div>
      <button onClick={handleClick("good")}>Good</button>
      <button onClick={handleClick("neutral")}>Neutral</button>
      <button onClick={handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
