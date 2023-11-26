import './Statistics.css';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ data, title }) => {
  return (
    <section className="section statistics">
      {title && <h2 className="statistics-title">{title}</h2>}

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
