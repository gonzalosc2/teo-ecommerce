import React from "react";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import { Button, Text} from "@chakra-ui/react";
import BuyerInfo from "../../components/buyer-info"
import ItemListCart from "../../components/items-list-cart"

const Cart = () => {
  const { carrito, createNewOrder, lastOrder, cleanCarrito } = React.useContext(AppContext);
  
  const handleCancelar = () => {
    cleanCarrito()
  }
  
  return (
    <div style={{marginTop: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <Text as='b' fontSize='4xl' color='green.400'> Check out de compra </Text>
      {
        !carrito.length ? 
        <>
          <p>No hay elementos en el carro de compras</p>

          <Link to={'/'}>
              <Button colorScheme='green' variant='solid'>
                Ir a comprar
              </Button>
          </Link>
        </>
        :
        <>
          <ItemListCart carrito={carrito} />
           
          <BuyerInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />

          <Button onClick={handleCancelar} > Cancelar compra </Button>
        </>
      }
    </div>
  )
};

export default Cart;
