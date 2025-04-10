import RecepieItem from "./RecepieItem";
import styled from "styled-components";

export default function Recepie({ data }) {
  const Container = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      {data.map((item) => {
        return (
          <RecepieItem
            title={item.name}
            time={item.time}
            image={item.image}
            servings={item.servings}
            calories={item.calories}
            difficulty={item.difficulty}
          />
        );
      })}
    </Container>
  );
}
