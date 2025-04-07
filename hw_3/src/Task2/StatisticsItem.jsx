export default function StatisticsItem({ label, percentage, itemClass, percentageClass }) {
  return (
    <li class={itemClass}>
      <span class="label">{label}: </span>
      <span class={percentageClass}>{percentage}%</span>
    </li>
  );
}
