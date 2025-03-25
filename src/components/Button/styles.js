import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    font-family: "Road Rage", sans-serif;
    font-size: 30px;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
        border-radius: 5px;
    }
`;
