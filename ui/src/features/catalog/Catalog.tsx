import { useState, useEffect } from "react";
import {Product} from "../../app/models/product";
import ProductList from "./ProductList";
import Button from "@mui/material/Button";
import agent from "../../app/api/agent"
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import ServerError from "../../app/errors/ServerError";
import { Grid, Paper} from "@mui/material";
import ProductSearch from "./ProductSearch"
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckboxButttons from "../../app/components/CheckboxButttons";
import AppPagination from "../../app/components/AppPagination";
import useProducts from "../../app/hooks/useProducts";

/*interface Props {
    products: Product[];
    addProduct: () => void;
}*/

const sortOptions = [
    {value: 'name', label: 'Alphabetical'},
    {value: 'priceDesc', label: 'Price - High to low'},
    {value: 'price', label: 'Price - Low to high'}
]

export default function Catalog() {

    //const [products, setProducts] = useState<Product[]>([]);
    
    const {products, brands, types, filtersLoaded, metaData} = useProducts();
    const {productParams} = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();

    //const [loading, setLoading] = useState(true);

    /*useEffect(()=> {
        agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
      }, [])*/

      //if (status.includes('pending') || !metaData) return <LoadingComponent message='Loading products...'/>
      if (!filtersLoaded) return <LoadingComponent message="Loading products..." />

      //if (products.length === 0) return <ServerError />

    
    //   function addProduct() {
    //     setProducts(prevState => [...prevState, 
    //       {
    //         id: prevState.length + 101,
    //         name:"product " +(prevState.length + 1),
    //         price: 4560.00,
    //         brand: 'some brand',
    //         description: 'some description',
    //         pictureUrl: 'http'
    //       }])
    //   }

    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={3}>
                <Paper sx={{mb: 2}}>
                    <ProductSearch />
                </Paper>
                <Paper sx={{mb: 2, p:2}}>
                    <RadioButtonGroup
                        selectedValue={productParams.orderBy}
                        options={sortOptions}
                        onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
                    />
                </Paper>
                <Paper sx={{mb: 2, p:2}}>
                    <CheckboxButttons
                        items={brands}
                        checked={productParams.brands}
                        onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
                    />
                </Paper>
                <Paper sx={{mb: 2, p:2}}>
                    <CheckboxButttons
                        items={types}
                        checked={productParams.types}
                        onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
                    />
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products ={products}/>
                {/* <Button variant='contained' onClick={addProduct}>Add product</Button> */}
            </Grid>

            <Grid item xs={3} />
            <Grid item xs={9} sx={{mb:2}}>
                {metaData && 
                    <AppPagination 
                        metaData={metaData}
                        onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
                    />
                }
            </Grid>
        </Grid>
    )
}