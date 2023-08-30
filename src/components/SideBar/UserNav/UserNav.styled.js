import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
    // Common
    margin: 0;
    padding: 0;
    list-style: none;
    //
;`

export const ItemLink = styled(Link)`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 185px;
    height: 40px;
    gap: 8px;
    padding: 10px 12px;
    
    // add :not(last-child)
    margin-bottom: 18px;

    border-radius: 8px;

    color: rgba(52, 52, 52, 0.50);
    font-size: 14px;
    font-weight: 600;
    line-height: normal;

    @media screen and (min-width: 768px) {
        width: 225px;
        height: 56px;

        margin-bottom: 16px;
    }

    @media screen and (min-width: 1440px) {
        width: 240px;

        font-size: 16px;
    }

    fill:rgba(52, 52, 52, 0.50);
    stroke: rgba(52, 52, 52, 0.50);

    // active
    &:hover {
        background-color: #E3F3FF;

        fill: #3E85F3;
        stroke: #3E85F3;
        color:#3E85F3;
    }
`;