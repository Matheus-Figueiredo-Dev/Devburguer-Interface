import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido!')
        .required('O e-mail é obrigatório!'),
      password: yup
        .string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres!')
        .required('A senha é obrigatória!'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem-vindo(a)! 👌',
        error: 'E-mail ou senha incorretos! 🤯',
      },
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br /> Acesse com seu <span>Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a>Clique aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
}
