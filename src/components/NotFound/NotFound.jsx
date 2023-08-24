import desk1x from '../../../assets/images/notFound/desk@1x.png';
import desk2x from '../../../assets/images/notFound/desk@2x.png';
import tab1x from '../../../assets/images/notFound/tab@1x.png';
import tab2x from '../../../assets/images/notFound/tab@2x.png';
import mob1x from '../../../assets/images/notFound/mob@1x.png';
import mob2x from '../../../assets/images/notFound/mob@1x.png';

import { Wrapper, Text, Img, Info, Home } from './NotFound.styled';

export const NotFoundComp = () => {
  return (
    <>
      <Wrapper>
        <Text>4</Text>
        <Img
          srcSet={`${desk1x} 1440w, ${desk2x} 2880w,  ${tab1x} 768w, ${tab2x} 1536w, ${mob1x} 375w, ${mob2x} 750w,`}
          src={mob1x}
          alt="goose"
        />
        <Text>4</Text>
      </Wrapper>
      <Info>
        <p>We’re sorry, the page you requested could not be found.</p>
        <Home>Please go back to the homepage.</Home>
      </Info>
    </>
  );
};

