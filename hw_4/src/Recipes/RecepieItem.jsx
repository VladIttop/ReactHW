import styled from "styled-components";
import InfoList from "./InfoList";
import Difficulty from "./Difficulty";

export default function RecepieItem({
  image,
  title,
  time,
  servings,
  calories,
  difficulty,
}) {
  const Img = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
  `;
  const Title = styled.h2`
    font-size: 20px;
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  `;

  const List = styled.ul`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
  `;

  const ItemContainer = styled.li`
    padding: 10px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `;

  return (
    <ItemContainer>
      <Img src={image} alt={title} />
      <Title>{title}</Title>
      <List>
        <InfoList time={time} servings={servings} calories={calories} />
      </List>
      <Difficulty difficulty={difficulty} />
    </ItemContainer>
  );
}