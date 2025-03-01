import PropTypes from "prop-types";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};

Header.displayName = "Part";
export default Header;
