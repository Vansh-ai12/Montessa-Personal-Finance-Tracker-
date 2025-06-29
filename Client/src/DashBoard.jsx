import { useState, useEffect } from "react";
import MyLineChart from "./MyLineChart";
import MyBarChart from "./MyBarChart";
import MyPieChart from "./MyPieChart";
import MyAreaChart from "./MyAreaChart";
import MyStackedBarCharts from "./MyStackedBarCharts";
import KPI from "./KPI";
import MyBarPaymentMethods from "./MyBarPaymentMethods";
export default function DashBoard() {
  const [transactions, setTransactions] = useState([]);
 
  const fetchTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/data", {
        credentials: "include",
      });
      const data = await res.json();

      setTransactions(data.transactions || []);
      
     
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  console.log(totalExpense);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            color: "#1e1e2f",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Dashboard Overview
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <KPI title="Total Income" value={`₹${totalIncome}`} color="#4caf50" />
          <KPI
            title="Total Expense"
            value={`₹${totalExpense}`}
            color="#f44336"
          />
          <KPI
            title="Net Balance"
            value={`₹${totalIncome - totalExpense}`}
            color="#1976d2"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <MyLineChart transactions={transactions} />
          <MyBarChart transactions={transactions} />
          <MyPieChart transactions={transactions} />
          <MyAreaChart transactions={transactions} />
          <MyStackedBarCharts transactions={transactions} />
          <MyBarPaymentMethods transactions={transactions} />
        </div>
      </div>
    </>
  );
}
