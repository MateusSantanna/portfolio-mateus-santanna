import styled from "styled-components";

export const HeaderStyle = styled.header`
    position: fixed,
    top: 0,
    left: 0,
    width: 100%,
    background-color: #fff,
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
    padding: 10px 20px,
    display: flex,
    justify-content: space-between,
    align-items: center,
    z-index: 1000,

    h1  {
    margin: 0;
    }

    a{
    margin: 0 15px;
    cursor: pointer;
    }
`;
