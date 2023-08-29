import styled from 'styled-components';

export const Container = styled.div`
    // Common
    box-sizing: border-box;
    // 
    display: flex;
    flex-direction: column;

    width: 225px;
    height: 100vh;
    padding: 20px 24px;
    
    background-color: #ffffff;

    stroke: #343434;

    @media screen and (min-width: 768px) {
        width: 289px;
        padding: 32px 24px;
    }

    @media screen and (min-width: 1440px) {
        padding: 32px 24px 24px 24px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 64px;
`;

export const CloseIcon = styled.svg`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 32px;
        height: 32px;
    }

    @media screen and (min-width: 1440px) {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`;

export const TitleSideBar = styled.h2`
    color: rgba(52, 52, 52, 0.50);
    font-size: 12px;
    font-weight: 600;
    line-height: normal; 

     @media screen and (min-width: 768px) {
        font-size: 14px;
     }
`;