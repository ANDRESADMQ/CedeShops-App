import { Page } from "../../components/Page";
import { Search } from "../../components/Search";
import { CardShop } from "./components/CartShop";

const SHOPS = [
    {
        id: 1,
        name: "D1",
        image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tiendas_D1_logo.png",
        location: "",
        category: "Supermercado"
    },
    {
        id: 2,
        name: "Makro",
        image: "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/MAKRO-01-1024x648.jpg",
        location: "",
        category: "Supermercado"
    },
    {
        id: 3,
        name: "Tienda del peluquero",
        image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
        location: "",
        category: "Belleza"
    } ,
    {
        id: 4,
        name: "D1",
        image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tiendas_D1_logo.png",
        location: "",
        category: "Supermercado"
    },
    {
        id: 5,
        name: "Makro",
        image: "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/MAKRO-01-1024x648.jpg",
        location: "",
        category: "Supermercado"
    },
    {
        id: 6,
        name: "Tienda del peluquero",
        image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
        location: "",
        category: "Belleza"
    }       


];

export const Home = () => (
    <Page>
        <h1>Home</h1>
        <Search />
        {
            SHOPS.map((item, key) => <CardShop key={key} {...item} />)
        }
    </ Page >
);