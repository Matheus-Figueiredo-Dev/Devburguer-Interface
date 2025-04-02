import styled from 'styled-components';

import BannerHamburguer from '../../assets/bannerhamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};

    background-image: linear-gradient(
     rgba(255, 255, 255, 0.7), 
     rgba(255, 255, 255, 0.7)
    ), url('${Background}');
`;

export const Banner = styled.div`
    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    position: relative;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: ${(props) => props.theme.white};
        line-height: 65px;
        position: absolute;
        right: 20%;
        top: 30%;

        span {
            color: ${(props) => props.theme.white};
            display: block;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    background: none;
    cursor: pointer;
    color: ${(props) => props.$isActiveCategory ? (props) => props.theme.purple : '#969696'};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;

    & > :nth-last-child(1):nth-child(odd) {
        grid-column: 2 / 3;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 40px;

    button {
        width: 300px;
        font-size: 40px;
    }
`