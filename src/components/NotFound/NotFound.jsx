import desk1x from '../../images/notFound/desk@1x.webp';
import desk2x from '../../images/notFound/desk@2x.webp';
import tab1x from '../../images/notFound/tab@1x.webp';
import tab2x from '../../images/notFound/tab@2x.webp';
import mob1x from '../../images/notFound/mob@1x.webp';
import mob2x from '../../images/notFound/mob@1x.webp';

import { Container } from '../../styles/container';
import {
  Wrapper,
  Content,
  Text,
  Img,
  Info,
  Title,
  Btn,
} from './NotFound.styled';

export const NotFoundComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Text>4</Text>
          <Img
            srcSet={`${desk1x} 1440w, ${desk2x} 2880w,  ${tab1x} 768w, ${tab2x} 1536w, ${mob1x} 375w, ${mob2x} 750w,`}
            src={mob1x}
            alt="goose"
          />
          <Text>4</Text>
        </Content>
        <Info>
          <Title>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </Title>
          <Btn to="/">Back to home</Btn>
        </Info>
      </Wrapper>
    </Container>
  );
};
