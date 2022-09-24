import { ItemMenuWrapper } from "./styles";
import {Link} from "react-router-dom";


export const ItemMenu = ({ icon:Icon, label, path }) => (
    
    <Link to={path}>
        <ItemMenuWrapper>
            <Icon/>
            <p>{ label }</p>
        </ItemMenuWrapper>
    </Link>
)