import Part from "./Part";
import PropTypes from "prop-types";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  );
};

Content.propTypes = {
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

Content.displayName = "Content";
export default Content;
