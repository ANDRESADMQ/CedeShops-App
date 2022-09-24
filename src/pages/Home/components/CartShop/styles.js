import styled from "styled-components";
import {Link} from "react-router-dom";
import { Theme } from "../../../../Themes/theme";

export const CardShopWrapper = styled(Link)`
    margin: 12px 15px;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    text-decoration: none;

    &:hover{
        background-color: #e9f9f9;
        -webkit-box-shadow: 2px 3px 14px 0px rgba(99,99,99,1);
        -moz-box-shadow: 2px 1px 5px 0px rgba(99,99,99,1);
        box-shadow: 2px 1px 5px 0px rgba(99,99,99,1);        
    }

`;

export const CardShopImage = styled.div`
    img {
        width:80px;
    }
`;

export const CardShopContent = styled.div`
    flex: 1;
    margin: 0 8px;
    border: 1px solid red;

    h3 {
        margin: 3px 0px;
        font-size: 1em;
        color: ${Theme.primary_text};
    };
    P {
        color: ${Theme.primary_text};
    };
    
    span{
        font-weight: 300;
        color: ${Theme.primary_text};
    }`;