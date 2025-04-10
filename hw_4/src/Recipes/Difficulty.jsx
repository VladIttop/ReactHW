import styled from "styled-components";

export default function Difficulty({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  const DifficultyList = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
  `;

  const DifficultyItem = styled.li`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${(props) =>
      props.isActive
        ? props.level === "Hard"
          ? "#ffe6e6"
          : props.level === "Medium"
          ? "#fff4e6"
          : "#e6ffe6"
        : "transparent"};
    color: ${(props) =>
      props.isActive
        ? props.level === "Hard"
          ? "red"
          : props.level === "Medium"
          ? "orange"
          : "green"
        : "#333"};
    border: ${(props) => (props.isActive ? "1px solid #ccc" : "none")};
  `;

  return (
    <div>
      <h3 >Difficulty</h3>
      <DifficultyList>
        {levels.map((level, index) => (
          <DifficultyItem
            key={index}
            level={level}
            isActive={
              (difficulty === 0 && level === "Easy") ||
              (difficulty === 1 && level === "Medium") ||
              (difficulty === 3 && level === "Hard")
            }
          >
            {level}
          </DifficultyItem>
        ))}
      </DifficultyList>
    </div>
  );
}
