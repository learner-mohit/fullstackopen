import Part from "./Part";
import { nanoid } from "nanoid";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={nanoid()} part={part.name} exercises={part.exercises}></Part>
      ))}
    </>
  );
};
export default Content;
