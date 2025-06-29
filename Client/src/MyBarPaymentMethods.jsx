import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



export default class MyBarPaymentMethods extends PureComponent {
  render() {
    const {transactions} = this.props;
    const data = [];
    transactions.forEach((t) => {

      
      const name = t.paymentMethod;
      const existing = data.find((item) => item.name === name);

      if (existing) {
        existing.Amount += t.amount;
      } else {
        data.push({
          name: name,
          Amount: t.amount,
        });
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
              top: 5,
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
            <Bar
              dataKey="Amount"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
