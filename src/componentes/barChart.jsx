
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import barDados from'../mock/barDados.json'

export const BarChart2 = () => {



  return (

    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={barDados}
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
