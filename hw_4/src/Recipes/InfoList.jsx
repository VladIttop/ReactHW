import styled from "styled-components";
import { CiAlarmOn } from "react-icons/ci";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";

export default function InfoList({ time, servings, calories }) {
    const Item = styled.li`
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: #333;
    `
    return(
        <>
        <Item>
            <CiAlarmOn /> {time} min
        </Item>
        <Item>
            <AiFillCheckCircle /> {servings} servings
        </Item>
        <Item>
            <AiFillFire /> {calories} calories
        </Item>

        </>
    )
}
