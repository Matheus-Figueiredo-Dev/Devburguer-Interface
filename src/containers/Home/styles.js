import styled from 'styled-components';

import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        color: #f4f4f4;
        font-size: 80px;
        position: absolute;
        left: 2%;
        top: 30%;
    }
`
export const Container = styled.section`
    background: url('${Background}');
    height: 400px;
`

export const Content = styled.div`

`
