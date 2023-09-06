import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-right: 8px;

    cursor: pointer;

    fill: ${props => props.theme.variable.buttonBg};

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        fill: ${props => props.theme.variable.btnColorActive};
    }

    @media screen and (min-width: 375px) {
        margin-right: 14px;
    }
`;

export const MoonIcon = styled.svg`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const SunIcon = styled.svg`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;