import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 35px;
    background-color: inherit;
    border: none;
    min-width: 200px;
    font-size: 1rem;
    font-weight: 600;
`;

export const CardInput = Input.extend`
    &::placeholder {
        color: grey;
        font-size: 1rem;
        font-weight: 600;
    };
`;

export const ColumnInput = Input.extend`
    margin: 20px;
    &::placeholder {
        color: blue;
        font-size: 1rem;
        font-weight: 600;
    };
`;