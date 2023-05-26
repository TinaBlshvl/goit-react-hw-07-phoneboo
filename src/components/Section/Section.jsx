import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
