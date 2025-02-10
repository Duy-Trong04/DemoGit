import Button from "@atlaskit/button";
import React from "react";
import styled, {css} from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left !important;

    &, 
    &:hover {
        ${(p) => 
            p.isComleted && 
            css`
                text-decoration: line-through;
            `}
    }

    

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon{
        display:none;

        &:hover{
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`;

export default function Todo({todo, onCheck}){
    return <ButtonStyled shouldFitContainer iconAfter={
        !todo.isComleted && (
        <span className="check-icon" onClick={() => onCheck(todo.id)}> <CheckIcon primaryColor='#4fff4f'/> </span>
        )
    }
    isComleted = {todo.isComleted}
    >
        {todo.name}
    </ButtonStyled>;
}