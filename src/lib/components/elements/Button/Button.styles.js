import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.main};
    color: white;
    outline: none;
    border-radius: 5px;
    border: 1px black solid;
    height: 25px;
    width: 100px;
    margin: 11px;
    box-shadow: 3px 2px 3px 0px #989898;
    border-radius: 20px;

    &:hover{
        background-color: #57587b;
    }

    &:active{
        box-shadow: 1px 1px 1px 0px #989898;
    }
`;