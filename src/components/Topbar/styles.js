import styled from "styled-components";
import {Theme} from "../../Themes/theme";
import {TOP_BAR_HEIGTH} from "../../Themes/theme";

export const TopbarWraper = styled.div`
    border: 1px solid red;
    width: 100%;
    height: ${TOP_BAR_HEIGTH}px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background: ${Theme.primary};
`;

export const LogoWrapper = styled.div`
    padding: 0px;
`;

export const CartWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 25px 25px;

`;



