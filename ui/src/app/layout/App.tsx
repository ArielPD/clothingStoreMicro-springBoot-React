
import { useState, useEffect, useCallback } from "react"
import {Routes, Route} from "react-router-dom"
import {CssBaseline, Container, createTheme, ThemeProvider} from "@mui/material"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header"
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync, setBasket } from "../../features/basket/basketSlice";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import OrderPage from "../../features/orders/OrderPage";
import Inventory from "../../features/admin/Inventory";
/*import PrivateRoute from "./PrivateRoute";*/

const App = () => {

  //const {setBasket} = useStoreContext();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () =>  {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    /*const buyerId = getCookie('buyerId');
    console.log('buyerId ' + buyerId)
    dispatch(fetchCurrentUser());
    if (buyerId) {
        console.log("exist buyerId")
        agent.Basket.get()
                    //.then(basket => setBasket(basket))
                    .then(basket => dispatch(setBasket(basket)))
                    .catch(error => console.log(error))
                    .finally(() => setLoading(false));
    } else {
        console.log("NOT exist buyerId")
        setLoading(false);
    }*/

    initApp().then(() => setLoading(false));

  }, [initApp])

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea': '#121212'
      }
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message='Initialising app...'/>


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        {/* <Catalog /> */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/catalog/:id' element={<ProductDetails/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/server-error' element={<ServerError/>} />
          <Route path='/basket' element={<BasketPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/orders' element={<OrderPage />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
 