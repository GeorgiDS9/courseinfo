import PropTypes from "prop-types";

const Total = ({ part1, part2, part3 }) => {
  const sum = part1.exercises + part2.exercises + part3.exercises;
  return <p>Number of exercises {sum}</p>;
};

Total.propTypes = {
  part1: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part2: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part3: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

Total.displayName = "Part";
export default Total;
