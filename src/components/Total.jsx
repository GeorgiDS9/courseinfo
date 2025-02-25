import PropTypes from "prop-types";

const Total = ({ course }) => {
  const sum =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return <p>Number of exercises {sum}</p>;
};

Total.propTypes = {
  course: PropTypes.object.isRequired,
};

Total.displayName = "Part";
export default Total;
