import {useState} from 'react';
import {Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid, Box, Button} from "@mui/material";
import {Delete, Remove, Add} from "@mui/icons-material";
import agent from "../../app/api/agent";
import { useStoreContext } from '../../app/context/StoreContext';
import { LoadingButton } from '@mui/lab';
import BasketSummary from './BasketSummary';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAsync, removeBasketItemAsync, setBasket } from './basketSlice';

const BasketPage = () => {
    
    //const {basket, setBasket, removeItem} = useStoreContext();
    const {basket, status} = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();

    if(!basket) return <Typography variant='h3'>Your basket is empty</Typography>


    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">SubTotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            basket.items.map(item => (
                                <TableRow
                                    key={item.productId}
                                >
                                    <TableCell component="th" scope="row">
                                        <Box display='flex' alignItems="center">
                                            <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}}/>
                                            <span>{item.name}</span>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
                                    <TableCell align="center">
                                        <LoadingButton 
                                            loading={status === ('pendingRemoveItem'+ item.productId + 'rem')} 
                                            onClick={() => dispatch(removeBasketItemAsync({
                                                productId: item.productId, quantity: 1, name: 'rem'}))} 
                                            color='error'>
                                            <Remove />
                                        </LoadingButton>
                                        {item.quantity}
                                        <LoadingButton 
                                            loading={status.includes('pendingAddItem'+ item.productId)} 
                                            onClick={() => dispatch(addBasketItemAsync({productId: item.productId}))} 
                                            color='secondary'>
                                            <Add />
                                        </LoadingButton>
                                    </TableCell>
                                    <TableCell align="right">${((item.price/100) * item.quantity).toFixed(2)}</TableCell>
                                    <TableCell align="right">
                                        <LoadingButton 
                                            loading={status === ('pendingRemoveItem' + item.productId + 'del')} 
                                            onClick={() => dispatch(removeBasketItemAsync({
                                                productId: item.productId, quantity: item.quantity, name: 'del'}))} 
                                            color='error'>
                                            <Delete />
                                        </LoadingButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default BasketPage;
