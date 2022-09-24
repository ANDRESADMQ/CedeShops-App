import styled from "styled-components";
import { BOTTOM_MENU_HEIGTH, Theme } from "../../Themes/theme" 

export const MenuWrapper = styled.section`
    border-top: 2px solid #ccc;
    position: fixed;
    width: 100%;
    height: ${BOTTOM_MENU_HEIGTH}px;
    background-color: #fff;
    display: flex;
    bottom: 0;
    left: 0; 
    a {
        flex: 1;
        text-decoration: none;
    }     
`;

export const cajasMenu = styled.section`
    /*position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    bottom: 0;
    left: 0;
   */
    background-color: #fff;
`;

export const ItemMenuWrapper = styled.div`
    border-right: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //flex: 1;
    svg{
        color: ${Theme.secondary};
        font-size: 1.3em;

    };
    p {
        color: ${Theme.secondary};
        font-weight: 300;
        font-size: 0.85em;
    };
    &:hover{
        background-color: ${Theme.secondary};
        svg {color: #fff}
        p { color: #fff}

    }    

`;
