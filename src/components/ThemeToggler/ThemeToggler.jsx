import icons from '../../images/icons.svg';

import {
    Wrapper,
    MoonIcon,
} from './ThemeToggler.styled';

const ThemeToggler = () => {
    return (
        <Wrapper>
            <MoonIcon>
                <use href={ icons + "#icon-moon" }></use>
            </MoonIcon>
        </Wrapper>
    );
};

export default ThemeToggler;