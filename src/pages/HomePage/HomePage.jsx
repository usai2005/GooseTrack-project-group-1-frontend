import {
  // SectionHero,
  AuthContainer,
  DescriptionContainer,
  DescriptionList,
  DescriptionListItem,
  HeroTitle,
  AuthList,
  LoginLink,
  SignupLink,
  InfoThumb,
  PictureThumb,
  InfoNumber,
  InfoTitle,
  ItemTitle,
  ItemDescription,
  LoginIcon,
} from './HomePage.styled';

import icons from '../../images/icons.svg';

import { Container } from '../../styles/container';
// import { ReactComponent as LoginIcon } from '../../images/icons/log-in-01.svg';

export default function HomePage() {
  return (
    // <body>
    <Container>
      <main>
        <section>
          <AuthContainer>
            <HeroTitle>
              G<span>oo</span>seTrack
            </HeroTitle>
            <AuthList>
              <li>
                <LoginLink href="#">
                  <span>Log in</span>
                  <LoginIcon>
                    <use href={icons + '#icon-log-in-01'}></use>
                  </LoginIcon>
                </LoginLink>
              </li>
              <li>
                <SignupLink href="#">Sign up</SignupLink>
              </li>
            </AuthList>
          </AuthContainer>
        </section>
        <section>
          <DescriptionContainer>
            <DescriptionList>
              <DescriptionListItem>
                <InfoThumb>
                  <InfoNumber>1.</InfoNumber>
                  <InfoTitle>
                    <h2>calendar</h2>
                  </InfoTitle>
                  <ItemTitle>view</ItemTitle>
                  <ItemDescription>
                    GooseTrack's Calendar view provides a comprehensive overview
                    of your schedule, displaying all your tasks, events, and
                    appointments in a visually appealing and intuitive layout.
                  </ItemDescription>
                </InfoThumb>
                <PictureThumb></PictureThumb>
              </DescriptionListItem>
              <DescriptionListItem>
                <InfoThumb>
                  <InfoNumber>2.</InfoNumber>
                  <ItemTitle>SIDEBAR</ItemTitle>
                  <ItemDescription>
                    GooseTrack offers easy access to your account settings,
                    calendar, and filters. The "My Account" section allows you
                    to manage your profile information and preferences, while
                    the calendar provides a quick and convenient way to view
                    your upcoming events and tasks.
                  </ItemDescription>
                </InfoThumb>
                <PictureThumb></PictureThumb>
              </DescriptionListItem>
              <DescriptionListItem>
                <InfoThumb>
                  <InfoNumber>3.</InfoNumber>
                  <InfoTitle>
                    <h2>all in</h2>
                  </InfoTitle>
                  <ItemTitle>one</ItemTitle>
                  <ItemDescription>
                    GooseTrack is an all-in-one productivity tool that helps you
                    stay on top of your tasks, events, and deadlines. Say
                    goodbye to scattered to-do lists and hello to streamlined
                    productivity with GooseTrack.
                  </ItemDescription>
                </InfoThumb>
                <PictureThumb></PictureThumb>
              </DescriptionListItem>
            </DescriptionList>
          </DescriptionContainer>
        </section>
      </main>
    </Container>
    // </body>
  );
}
