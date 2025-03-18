import styled from 'styled-components';

import BannerHamburguer from '../../assets/bannerhamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    background-image: linear-gradient(
     rgba(255, 255, 255, 0.7), 
     rgba(255, 255, 255, 0.7)
    ), url('${Background}');
`;

export const Banner = styled.div`
    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-color: #1f1f1f;
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
        color: #fff;
        line-height: 65px;
        position: absolute;
        right: 20%;
        top: 30%;

        span {
            color: #fff;
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
    color: ${(props) => props.$isActiveCategory ? '#9758A6' : '#969696'};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758A6'};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;
