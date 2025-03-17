import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
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
  Link,
} from './styles';

export function Login() {
  const navigate = useNavigate();

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
    try {
      const response = await api.post('/sessions', {
        email: data.email,
        password: data.password,
      });

      await toast.promise(Promise.resolve(response), {
        pending: 'Verificando seus dados...',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return `Seja bem-vindo(a)! 👌`;
          },
        },
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('E-mail ou senha inválidos! 🤯');
      } else {
        toast.error('Ops... Algo deu errado! 😥');
      }
    }
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
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
