import { useState } from "react";
import "./Add.css";
function Add() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");
  const [method, setMethod] = useState("UPI");

  async function addTransaction(event) {
    event.preventDefault();

    try {
      const url = import.meta.env.VITE_ADD_URL;
      let response = await fetch(url, {
        method: "Post",
        credentials: "include",
        body: JSON.stringify({
          title,
          amount: Number(amount),
          type,
          date,
          category,
          paymentMethod: method,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      if (!response.ok) {
        console.error("Server error:", data);
        alert("Failed to add transaction");
      } else {
        alert("Data added successfully");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }
  function refreshData() {
    setTitle("");
    setAmount("");
    setType("");
    setDate("");
    setCategory("");
    setMethod("");
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          className="Add-finance"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "200px",
          }}
        >
          <input
            onChange={(event) => setTitle(event.target.value)}
            className="Add"
            type="text"
            placeholder="Enter Title"
            value={title}
          ></input>
          <br />
          <br />
          <br />
          <input
            className="Add"
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          ></input>
          <br />
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label htmlFor="expenses">Expense</label>
            <input
              type="radio"
              id="expenses"
              name="transactionType"
              value="expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
              className="expenses"
            ></input>

            <label htmlFor="income">Income</label>
            <input
              type="radio"
              id="income"
              name="transactionType"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
              className="income"
            ></input>
          </div>
          <br />
          <br />
          <br />
          <input
            value={date}
            className="Add"
            type="date"
            placeholder="Enter Date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <br />
          <br />
          <br />
          {type == "expense" ? (
            <>
              <select
                value={category}
                className="select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Select Category" disabled={true}>
                  Select Category
                </option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Rent">Rent</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
              </select>
              <br />
              <br />
              <br />
            </>
          ) : null}
          <select
            value={method}
            className="select"
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="Payment Method" disabled={true}>
              Payment Method
            </option>
            <option value="UPI">UPI</option>
            <option value="Net-Banking">Net-Banking</option>
            <option value="Check-Payment">Check-Payment</option>
            <option value=" Credit-Card">Credit-Card</option>
            <option value=" Cash">Cash</option>
          </select>
          <br />
          <br />
          <br />

          <div style={{ display: "flex" }}>
            <button onClick={addTransaction} id="transac">
              Add Transaction
            </button>
          </div>
        </form>
        <div style={{ marginTop: "500px" }}>
          <button onClick={refreshData} id="transac">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
export default Add;
