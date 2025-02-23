import Part from "./Part";
import PropTypes from "prop-types";

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};

Content.propTypes = {
  part1: PropTypes.string.isRequired,
  exercises1: PropTypes.number.isRequired,
  part2: PropTypes.string.isRequired,
  exercises2: PropTypes.number.isRequired,
  part3: PropTypes.string.isRequired,
  exercises3: PropTypes.number.isRequired,
};

Content.displayName = "Content";
export default Content;
