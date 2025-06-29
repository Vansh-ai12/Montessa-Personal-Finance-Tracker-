import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default class MyStackedBarCharts extends PureComponent {
  render() {
    const { transactions } = this.props;
    const data = [];
    transactions.forEach((t) => {
      const month = new Date(t.date).toLocaleString("default", { month: "long",year: "numeric" });
      const amt=0;
      const existing = data.find((item)=>item.name== month);
      if(existing){
        existing[t.type] +=t.amount;
        existing[amt]+=1000;
      }else{
        data.push({
          name:month,
          income:t.type==="income"? t.amount : 0,
          expense:t.type==="expense"?t.amount:0,
          amt:amt
        })
      }
    });
    return (
      <div style={{width:"400px" ,height:"340px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" stackId="a" fill="#8884d8" />
            <Bar dataKey="expense" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
