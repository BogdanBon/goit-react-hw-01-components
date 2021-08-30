import PropTypes from 'prop-types';

function Statistical({ label, percentage }) {
  return (
    <div>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}</span>
    </div>
  );
}

Statistical.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistical;
