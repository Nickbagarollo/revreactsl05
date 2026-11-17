
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const BarChart2 = () => {

  const data = [
    { label: "Janeiro", meta: 120, atingido: 80 },
    { label: "Fevereiro", meta: 120, atingido: 80 },
    { label: "Março", meta: 120, atingido: 80 },
    { label: "Abril", meta: 120, atingido: 80 },
    { label: "Maio", meta: 120, atingido: 80 },
    { Label: "Janeiro", meta: 120, atingido: 80 },
  ];

  return (

    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar fill="green" dataKey="meta" radius={[10, 10, 0, 0]} />
      <Bar fill="orange" dataKey="atingido" radius={[10, 10, 0, 0]} />
    </BarChart>

  );
};
