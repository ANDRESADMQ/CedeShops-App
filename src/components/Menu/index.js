import {IoHome, IoCart, IoPerson} from "react-icons/io5";
import { MenuWrapper } from "./styles";
import { ItemMenu } from "./ItemMenu";


const MenuOptions = [
    {
        icon: IoHome,
        label: "Inicio",
        path: "/Home"

    },
    {
        icon: IoCart,
        label: "Carrito",
        path: "/Carro"

    },
    {
        icon: IoPerson,
        label: "Usuario",
        path: "/Usuario"

    },
];

export const Menu = () => {
        return (
            <MenuWrapper>
                {
                    MenuOptions.map((item, i) => (
                        <ItemMenu 
                            key={i} 
                            icon={item.icon} 
                            label={item.label} 
                            path={item.path} 
                        />
                        ))
                }
            </MenuWrapper>
        )
    }