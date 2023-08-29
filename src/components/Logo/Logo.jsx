import IMAGES from '../../images/sideBar/index'

import {
    Wrapper,
    LogoLink,
    LogoImg,
} from './Logo.styled';

const Logo = () => {
    return (
        <Wrapper>
            <LogoLink href="#">
                <LogoImg
                    srcSet={`${IMAGES.logoGooseMob} 36w,
                        ${IMAGES.logoGooseMob2x} 72w,
                        ${IMAGES.logoGooseTablet} 60w,
                        ${IMAGES.logoGooseTablet2x} 120w,
                        ${IMAGES.logoGooseDesktop} 71w,
                        ${IMAGES.logoGooseDesktop2x} 142w,`}
                    src={IMAGES.logoGooseMob}
                    alt="logotype of sidebar"
                    loading="lazy"
                />
                G<span>oo</span>seTrack
            </LogoLink>
        </Wrapper>
    );
};

export default Logo;