import styled from 'styled-components';

import BannerHamburguer from '../../assets/bannerhamburguer.svg'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
`

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
`

export const CategoryMenu = styled.div`

`

export const ProductsContainer = styled.div`

`