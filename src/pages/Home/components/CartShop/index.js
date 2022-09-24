import { CardShopContent, CardShopImage, CardShopWrapper } from "./styles";

export const CardShop = ({id, image, name, location, category}) => (
    <CardShopWrapper to={`/products/${id}`}>
        <CardShopImage>
            <img src={image} alt={name} />
        </CardShopImage>
        <CardShopContent>
            <h3>{name}</h3>
            <p>{location}</p>
            <span>{category}</span>
        </CardShopContent>
    </CardShopWrapper>
);