import { Page } from "../../components/Page";
import { useParams } from "react-router-dom";

export const Products = () => { 

    const { idShop } = useParams();

    return (

        <Page>
            <h1>Products page {idShop} </h1>
        </Page>

            )

};