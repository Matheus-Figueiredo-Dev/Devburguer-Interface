import { Elements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';

import stripePromise from '../../config/stripeconfig';
import CheckoutForm from '../../components/Stripe/CheckoutForm';
import { Button } from '../../components';
import { ContainerButton } from './styles';

export function Checkout() {
  const navigate = useNavigate();

  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return <div>Erro, tente novamente!</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
      <ContainerButton>
        <Button
          onClick={() => {
            navigate('/carrinho');
          }}
        >
          Voltar
        </Button>
      </ContainerButton>
    </Elements>
  );
}
