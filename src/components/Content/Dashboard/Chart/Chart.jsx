import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import css from "./Chart.module.css";
import Metricks from "./Metricks/Metricks";
import ToolsContainer from "./Tools/ToolsContainer";

const Chart = React.memo(({ data = [], isFetching }) => {
  const renderTooltip = ({ payload }) => {
    const { visitors, makedOrders } =
      !!payload && payload[0] && payload[0].payload ? payload[0].payload : {};

    return (
      <div className={css.tooltip}>
        <div className={css.value}>Заказы: {makedOrders}</div>
        <div className={css.value}>Посетители: {visitors}</div>
      </div>
    );
  };

  return (
    <AnimatedCard className={css.wrapper}>
      <CardTitle className={css.title}>
        Активность за период <ToolsContainer />
      </CardTitle>
      {data.length > 0 && <Metricks data={data} />}

      <div className={css.chart}>
        {!isFetching && (
          <ResponsiveContainer>
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6C7AF7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6C7AF7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickMargin="10"
                tick={{ stroke: "#54677D", strokeWidth: 1 }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickMargin="20"
                tickLine={false}
                tick={{ stroke: "#54677D", strokeWidth: 1 }}
              />
              <CartesianGrid stroke="#F4F4F4" vertical={false} />
              <Tooltip content={renderTooltip} />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#6C7AF7"
                fillOpacity={1}
                fill="url(#colorUv)"
                dot={false}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dot={false}
                dataKey="makedOrders"
                stroke="#82ca9d"
                strokeWidth={3}
                strokeDasharray="6 9"
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>
    </AnimatedCard>
  );
});

export default Chart;
