import {
  // SectionHero,
  Container,
  HeroTitle,
  List,
  LoginLink,
  SignupLink,
} from './HomePage.styled';
import { ReactComponent as LoginIcon } from '../../images/log-in-01.svg';

export default function HomePage() {
  return (
    <body>
      <main>
        <section>
          <Container>
            <HeroTitle>
              G<span>oo</span>seTrack
            </HeroTitle>
            <List>
              <li>
                <LoginLink href="#">
                  <span>Log in</span> <LoginIcon />
                </LoginLink>
              </li>
              <li>
                <SignupLink to="/register">Sign up</SignupLink>
              </li>
            </List>
          </Container>
        </section>
      </main>
    </body>
  );
}
