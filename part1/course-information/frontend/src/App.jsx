import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        id: 3,
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
