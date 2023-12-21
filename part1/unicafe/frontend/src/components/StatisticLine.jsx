const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ border: "1px solid black" }}>{text}</td>
      <td style={{ border: "1px solid black" }}>{value}</td>
    </tr>
  );
};
export default StatisticLine;
