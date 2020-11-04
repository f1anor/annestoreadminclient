import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, isFetching }) => {
  return (
    <div className="w-100 h-50 mt-5">
      {!isFetching && (
        <ResponsiveContainer>
          <LineChart data={data}>
            <Legend
              verticalAlign="top"
              height={36}
              iconSize={20}
              payload={[
                {
                  value: "Уникальные посетители",
                  type: "line",
                  id: "visitors",
                  color: "#2f7df6",
                },
                {
                  value: "Заказы",
                  type: "line",
                  id: "orders",
                  color: "#ffca28",
                },
              ]}
            />
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="makedOrders" stroke="#ffc323" strokeWidth={3} />
            <Line dataKey="visitors" stroke="#0070ff" strokeWidth={3} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
