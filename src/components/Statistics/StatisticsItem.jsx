import './Statistics.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="statistics-item">
      <span className="label">
        <b>{label}</b>
      </span>
      <span className="percentage">
        <b>{percentage}%</b>
      </span>
    </li>
  );
};
