import React from "react";
import "./TransactionModal.css";
import TransactionLogs from "./LogsContainer/TransactionLogs";
import { v4 as uuidv4 } from "uuid";

export default function TransactionModal(props) {
  return (
    <div>
      <div className="t-modal">
        <div className="t-container">
          <h3>Transaction Logs</h3>
          <div className="t-logs">
            {props.transactions.map((transaction) => (
              <TransactionLogs key={uuidv4()} transaction={transaction} />
            ))}
          </div>
          <div className="t-footer">
            <button onClick={props.closeTransaction}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
