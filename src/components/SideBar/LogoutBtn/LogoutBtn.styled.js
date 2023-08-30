import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoutLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 130px;
    height: 46px;

    margin-top: auto;

    text-decoration: none;

    background-color: #3E85F3;
    border-radius: 16px;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14); /* 128.571% */
    letter-spacing: -0.28px;

    span {
        margin-right: 11px;
    }

    @media screen and (min-width: 768px) {
        width: 140px;
        height: 46px;

        font-size: 18px;
        line-height: calc(24 / 18); /* 133.333% */
        letter-spacing: -0.36px;
    }

    &:hover {
        background-color: #2B78EF;
    }
`;

export const LogoutIcon = styled.svg`
    width: 18px;
    height: 18px;

    stroke: #ffffff;
`;