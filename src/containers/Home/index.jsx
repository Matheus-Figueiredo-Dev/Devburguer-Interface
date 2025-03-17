import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { Banner, Container, Content } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoriesCarousel>Carrossel de categorias</CategoriesCarousel>
          <div>Carrossel de produtos </div>
        </Content>
      </Container>
    </main>
  );
}
