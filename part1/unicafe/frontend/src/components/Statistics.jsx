import StatisticLine from "./StatisticLine";
import When from "./When";
const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => {
    return good + neutral + bad;
  };
  return (
    <>
      <h1>statistics</h1>
      <When truthy={getTotal() > 0} fallback={<p>No feedback given</p>}>
        <table style={{ borderCollapse: "collapse" }}>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={getTotal()} />
            <StatisticLine text={"average"} value={good * 1 + bad * -1} />
            <StatisticLine
              text={"positive"}
              value={`${(good * 100) / getTotal()} %`}
            />
          </tbody>
        </table>
      </When>
    </>
  );
};
export default Statistics;
