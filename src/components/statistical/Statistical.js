import PropTypes from 'prop-types';

function Statistical({ label, percentage }) {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </div>
  );
}

Statistical.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistical;
