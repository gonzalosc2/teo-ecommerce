import React from "react";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router-dom"

const ItemCount = ({ stock, addToCarrito }) => {
  const [counter, setCounter] = React.useState(1);
  const [clicked, setClicked] = React.useState(false)

  const navigate = useNavigate()

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubstract = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleCarrito = () => {
    addToCarrito(counter);
    setCounter(1);
    setClicked(true)
  };

  const handleNavigateCart = () => {
    return navigate('/cart')
  }

  return (
    <>
      {
        clicked ?
        <Button colorScheme='yellow' variant='solid' onClick={handleNavigateCart}>Finalizar compra</Button>
        :
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 15
            }}
          >
            {/* !! agregar carrito de eliminar y más */}
            <Button colorScheme='teal' variant='outline' border='2px' onClick={handleSubstract}>-</Button>
            <div style={{fontSize: '1rem'}}>{counter}</div>
            <Button colorScheme='teal' variant='outline' border='2px' onClick={handleAdd}>+</Button>
          </div>
          <Button colorScheme='green' variant='solid' onClick={handleCarrito} ml='15px'>
            Agregar al carro
          </Button>
        </>
      }
    </>
  );
};

export default ItemCount;
