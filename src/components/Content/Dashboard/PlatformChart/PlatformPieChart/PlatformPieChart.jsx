import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import css from "./PlatformPieChart.module.css";

const PlatformPieChart = React.memo(
  ({ data: { global, details }, COLORS1, COLORS2 }) => {
    return (
      <div className={css.wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={details}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
            >
              {details.map((entry, index) => (
                <Cell key={index} fill={COLORS2[index % COLORS2.length]} />
              ))}
            </Pie>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={global}
              outerRadius={50}
              fill="#8884d8"
            >
              {global.map((entry, index) => (
                <Cell key={index} fill={COLORS1[index % COLORS1.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
);
export default PlatformPieChart;
