import './App.css'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/nav-bar'
import ItemContainer from './container/item-container';
import DetailsContainer from './container/details-container';
import Cart from './container/cart-detail';
import ContextProvider from './context';
import Order from './container/order-detail';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          
          <Routes>
            <Route path={'/'} element={<ItemContainer />} />  
            <Route path={'/products/:category'} element={<ItemContainer />} />
            <Route path={'/product/:id'} element={<DetailsContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/order/:orderId'} element={<Order />} />
            <Route path={'/*'} element={<Navigate to='/' replace={true} />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>  
    </ChakraProvider>
  );
}

export default App;
 