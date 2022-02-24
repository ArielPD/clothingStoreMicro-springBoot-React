import  {Grid} from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/configureStore";

interface Props {
    products: Product[];
}

const ProductList = ({products}: Props) => {
    const { productsLoaded } = useAppSelector(state => state.catalog);
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid item xs={4} key={product.id} >
                    { !productsLoaded ? (
                        <ProductCardSkeleton />
                       ) : (
                        <ProductCard  product={product}/>
                       )
                    }
                </Grid>
            
            ))}
        </Grid>
    );
};

export default ProductList;