import PropTypes from "prop-types";

const Total = ({ parts }) => {
  const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return <p>Number of exercises {sum}</p>;
};

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Total.displayName = "Part";
export default Total;
