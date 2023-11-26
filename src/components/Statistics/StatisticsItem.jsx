import css from './Statistics.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>
        <b>{label}</b>
      </span>
      <span className={css.percentage}>
        <b>{percentage}%</b>
      </span>
    </li>
  );
};
