import StatisticsItem from "./StatisticsItem";
import statistics from "./CSS/Statistics.module.css";
export default function StatisticsList({ stats, title }) {
  return (
    <section className={statistics.statistics}>
      <div className={statistics.box}>
        <h2 class={statistics.title}>{title}</h2>
        <ul class={statistics.list}>
          {stats.map((item) => (
            <StatisticsItem
              itemClass={statistics.item}
              key={item.id}
              label={item.label}
              percentage={item.percentage}
              percentageClass={statistics.percentage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
