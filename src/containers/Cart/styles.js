import styled from 'styled-components';
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background-image: linear-gradient(
         rgba(255, 255, 255, 0.6), 
         rgba(255, 255, 255, 0.6)
        ), url('${Background}');
    width: 100%;
    min-height: 100vh;
`

export const Banner = styled.div`
    background: url('${Texture}');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img {
        height: 140px;
    }
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: ${(props) => props.theme.green};
    text-align: center;
    position: relative;
    margin-bottom: 20px;

    &::after {
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.green};
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 25%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40;
    margin: 0 auto;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    margin-top: 50px;

    button {
        width: 300px;
        font-size: 30px;
    }
`
