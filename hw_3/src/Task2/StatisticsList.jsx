import StatisticsItem from "./StatisticsItem";

export default function StatisticsList({ stats, title }) {
return (
    <section className="statistics">
        <ul class="stat-list">
        <h2 class="title">{title}</h2>
            {stats.map((item) => (
                <StatisticsItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />
            ))}
        </ul>
    </section>
)
}