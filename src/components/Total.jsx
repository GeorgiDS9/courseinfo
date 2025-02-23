import PropTypes from "prop-types";

const Total = ({ exercises1, exercises2, exercises3 }) => {
  const sum = exercises1 + exercises2 + exercises3;
  return <p>Number of exercises {sum}</p>;
};

Total.propTypes = {
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
};

Total.displayName = "Part";
export default Total;
