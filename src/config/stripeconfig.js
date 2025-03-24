import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51R6BnBJ4JrTYTa7HP1a2n0uePe8NrmzNdfCsmYveOeuRdLWVmTFiMgVvChCYQ1lfnlTarHAtuUTeBdlMWT34ebZw00gxNX5Ija',
);

export default stripePromise;
