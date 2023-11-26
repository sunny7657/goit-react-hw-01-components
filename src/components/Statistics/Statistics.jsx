import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  return (
    <section className="section">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
