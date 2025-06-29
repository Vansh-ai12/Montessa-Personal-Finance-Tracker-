import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#00B8D9", "#36B37E", "#6554C0", "#FF5630", "#FFAB00"];

export default class MyPieChart extends PureComponent {
  render() {
    const { transactions } = this.props;

    const categories = ["Food", "Bills", "Rent", "Travel", "Others"];
    const categoryMap = {
      Food: 0,
      Bills: 0,
      Rent: 0,
      Travel: 0,
      Others: 0,
    };

    transactions.forEach((t) => {
      if (t.type === "expense") {
        const category = (t.category || "Others").trim();
        if (categoryMap.hasOwnProperty(category)) {
          categoryMap[category] += Number(t.amount);
        } else {
          categoryMap["Others"] += Number(t.amount); 
        }
      }
    });


    const data = categories.map((cat) => ({
      name: cat,
      value: categoryMap[cat],
    })).filter(item => item.value > 0); 

    return (
      <div style={{ width: "400px", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
