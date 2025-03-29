import TransactionsItem from "./TransactionsItem";

export default function TransactionsList({ data }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map((transaction) => {
          return (
            <TransactionsItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
