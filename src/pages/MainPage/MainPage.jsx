import {
  AuthContainer,
  SliderContainer,
  LogoImg,
  DescriptionContainer,
  DescriptionList,
  DescriptionListItem,
  AuthTitle,
  AuthList,
  LoginLink,
  SignupLink,
  InfoThumb,
  InfoNumber,
  InfoTitle,
  ItemTitle,
  ItemDescription,
  LoginIcon,
  Span,
  ReviewsTitle,
} from './MainPage.styled';

// import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider';
import { ReviewsSlider } from '../../components/ReviewsSlider/ReviewsSlider';

import icons from '../../images/icons.svg';
import IMAGES from '../../images/mainPage/index';
import { Container } from '../../styles/container';
import BackToTopButton from 'components/BackToTop/BackToTopButton';

export default function MainPage() {
  return (
    <Container>
      <section>
        <AuthContainer>
          <LogoImg
            srcSet={` ${IMAGES.gooseLogoMob1x143} 142w, ${IMAGES.gooseLogoTabDesk1x150} 150w, ${IMAGES.gooseLogoTabDesk2x300} 300w,
                 ${IMAGES.gooseLogoMob2x285} 285w,`}
            sizes="150px, 142px"
            src={IMAGES.gooseLogoMob1x143}
            alt="Main page logo"
            loading="lazy"
          />
          <AuthTitle>
            G<Span className="firstSpan">o</Span>
            <Span className="secondSpan">o</Span>seTrack
          </AuthTitle>
          <AuthList>
            <li>
              <LoginLink to="/login">
                <span>Log in</span>
                <LoginIcon>
                  <use href={icons + '#icon-log-in-01'}></use>
                </LoginIcon>
              </LoginLink>
            </li>
            <li>
              <SignupLink to="/register">Sign up</SignupLink>
            </li>
          </AuthList>
          <BackToTopButton />
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
              <picture>
                <source
                  srcSet={`${IMAGES.calendarViewDesk1x604} 604w, ${IMAGES.calendarViewDesk2x1208} 1208w`}
                  media="(min-width: 1440px)"
                  sizes="604px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.calendarViewTab1x704} 704w, ${IMAGES.calendarViewTab2x1408} 1408w`}
                  media="(min-width: 768px)"
                  sizes="704px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.calendarViewMob1x335} 335w,  ${IMAGES.calendarViewMob2x670} 670w`}
                  media="(min-width: 375px)"
                  sizes="335px, 100vw"
                />
                <img
                  src={IMAGES.calendarViewMob1x335}
                  alt="Calendar view"
                  loading="lazy"
                />
              </picture>
            </DescriptionListItem>
            <DescriptionListItem className="middle">
              <InfoThumb className="middle">
                <InfoNumber>2.</InfoNumber>
                <ItemTitle>SIDEBAR</ItemTitle>
                <ItemDescription>
                  GooseTrack offers easy access to your account settings,
                  calendar, and filters. The "My Account" section allows you to
                  manage your profile information and preferences, while the
                  calendar provides a quick and convenient way to view your
                  upcoming events and tasks.
                </ItemDescription>
              </InfoThumb>
              <picture>
                <source
                  srcSet={`${IMAGES.sidebarDesk1x604} 604w, ${IMAGES.sidebarDesk2x1208} 1208w`}
                  media="(min-width: 1440px)"
                  sizes="604px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.sidebarTab1x704} 704w, ${IMAGES.sidebarTab2x1408} 1408w`}
                  media="(min-width: 768px)"
                  sizes="704px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.sidebarMob1x335} 335w,  ${IMAGES.sidebarMob2x670} 670w`}
                  media="(min-width: 375px)"
                  sizes="335px, 100vw"
                />
                <img
                  src={IMAGES.sidebarMob1x335}
                  alt="Sidebar"
                  loading="lazy"
                />
              </picture>
            </DescriptionListItem>
            <DescriptionListItem className="last">
              <InfoThumb>
                <InfoNumber>3.</InfoNumber>
                <InfoTitle className="last">
                  <h2>all in</h2>
                </InfoTitle>
                <ItemTitle>one</ItemTitle>
                <ItemDescription>
                  GooseTrack is an all-in-one productivity tool that helps you
                  stay on top of your tasks, events, and deadlines. Say goodbye
                  to scattered to-do lists and hello to streamlined productivity
                  with GooseTrack.
                </ItemDescription>
              </InfoThumb>
              <picture>
                <source
                  srcSet={`${IMAGES.allInOneDesk1x604} 604w, ${IMAGES.allInOneDesk2x1208} 1208w`}
                  media="(min-width: 1440px)"
                  sizes="604px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.allInOneTab1x704} 704w, ${IMAGES.allInOneTab2x1408} 1408w`}
                  media="(min-width: 768px)"
                  sizes="704px, 100vw"
                />
                <source
                  srcSet={`${IMAGES.allInOneMob1x335} 335w,  ${IMAGES.allInOneMob2x670} 670w`}
                  media="(min-width: 375px)"
                  sizes="335px, 100vw"
                />
                <img
                  src={IMAGES.allInOneMob1x335}
                  alt="All in one"
                  loading="lazy"
                />
              </picture>
            </DescriptionListItem>
          </DescriptionList>
        </DescriptionContainer>
      </section>
      <section>
        <SliderContainer>
          <ReviewsTitle>Reviews</ReviewsTitle>
          <ReviewsSlider />
        </SliderContainer>
      </section>
    </Container>
  );
}
