import { TopbarWraper, CartWrapper, LogoWrapper } from "./styles"
import {IoCart} from "react-icons/io5";

export const Topbar = () => (
    <TopbarWraper>
        <LogoWrapper>
            <div>
                <img src="Logo deportivo de ave fénix naranjado con negro y blanco.png" width="65px" alt="#"/>
            </div>
        </LogoWrapper>
        <CartWrapper>
            <div>
                <IoCart />
            </div>
        </CartWrapper>
    </TopbarWraper>    
)