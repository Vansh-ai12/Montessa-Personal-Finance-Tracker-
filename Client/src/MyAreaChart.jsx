import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const cardinal = curveCardinal.tension(0.2);

export default class MyAreaChart extends PureComponent {
  render() {
    const { transactions } = this.props;
    const data = [];
    transactions.forEach((t) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      let existing = data.find((item) => item.name === month);

      if (existing) {
        if (t.type === "income") {
          existing.income += Number(t.amount);
        } else if (t.type === "expense") {
          existing.expense += Number(t.amount);
        }
      } else {
        data.push({
          name: month,
          income: t.type === "income" ? Number(t.amount) : 0,
          expense: t.type === "expense" ? Number(t.amount) : 0,
        });
      }
    });


    const savingsData = data.map((item) => ({
      name: item.name,
      savings: item.income - item.expense,
    }));

 
    savingsData.sort((a, b) => new Date(a.name) - new Date(b.name));

    return (
      <div style={{ width: "400px", height: "340px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={savingsData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="savings"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
