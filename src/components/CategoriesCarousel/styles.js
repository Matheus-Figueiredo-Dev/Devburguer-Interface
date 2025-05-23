import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
    top: 10px;
    left: 15px;
    }

    .react-multiple-carousel__arrow--right {
    top: 10px;
    }

    padding-left: 40px;
    cursor: grab;
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 12px;

    &::after {
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.purple};
        bottom: 0;
        left: calc(50% - 28px)
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 230px;

`
export const CategoryButton = styled(Link)`
    color: ${(props) => props.theme.white};
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }
`