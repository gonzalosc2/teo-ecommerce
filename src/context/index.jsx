import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useToast } from '@chakra-ui/react'
import React from "react";

export const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = React.useState([]);

  const addProductToCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  const cleanCarrito = () => {
    setCarrito([]);
  };

  const carritoLength = carrito.reduce((acc, item) => acc + item.quantity, 0)

  const toast = useToast()

  const createNewOrder = (order) => {
    const db = getFirestore()
    const orders = collection(db, 'orders')

    addDoc(orders, order)
    .then((snapshot) => {
      setCarrito([])
      toast({
        title: `Su compra fue exitosa. El código de la orden de compra es ${snapshot.id}. Guardar código en caso de querer consultar detalle de compra.`,
        status: 'success',
        duration: 10000,
        isClosable: false,
      })
    })
    .catch(() => {
      toast({
        title: `No ha sido posible concretar su compra. Intente nuevamente.`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    })
  }
  return (
    <AppContext.Provider
      value={{ carrito, addProductToCarrito, quantityCart: carritoLength, createNewOrder, cleanCarrito }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
