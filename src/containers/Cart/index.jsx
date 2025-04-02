import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, ContainerButton, Content, Title } from './styles';
import { Button } from '../../components';

export function Cart() {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Logo Devburger" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
      <ContainerButton>
        <Button
          onClick={() => {
            navigate('/cardapio');
          }}
        >
          Adicionar mais produtos
        </Button>
      </ContainerButton>
    </Container>
  );
}
