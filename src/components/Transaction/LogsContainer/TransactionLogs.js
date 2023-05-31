import React from "react";
import "../LogsContainer/TransactionLogs.css";

export default function TransactionLogs(props) {
  const transaction = JSON.parse(props.transaction);

  return (
    <div className="logs-container">
      <strong>Txn Id: {transaction.txnID}</strong>
      <p>Reason: {transaction.reason}</p>
      <p>{transaction.txnTime}</p>
    </div>
  );
}
