import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "../item-count"
import { AppContext } from '../../context'

const ItemDetail = ({ data, lastCategory }) => {
  
  const {addProductToCarrito} = React.useContext(AppContext)

  const addToCarrito = (quantity) => {
    addProductToCarrito({
      id: data?.id,
      title: data?.title,
      price: data?.price,
      quantity: quantity,
      imageURL: data?.imageURL
    });
  };

  return (
    <Card
      margin="50px 20px"
      direction={{ base: "column", sm: "row" }}
      overflow="scroll"
      variant="filled"
      boxShadow="10px 10px 20px darkgreen"
    >
      <Image
        objectFit="contain"
        padding="10px"
        minWidth="150px"
        minHeight="400px"
        maxHeight="800px"
        src={data?.imageURL}
        alt={data?.title}
        backgroundColor="green.200"
      />

      <Stack>
        <CardBody backgroundColor="gray.200">
          <Heading size="md">{data?.title}</Heading>

          <Text py="10">{data?.description}</Text>
          <Text color="green.600" fontSize="4xl" align="end" fontWeight="800">
            ${parseInt(data?.price).toLocaleString('es-cl') || 0}
          </Text>
          <Text color="green.600" fontSize="3xl" align="end" fontWeight="600">
            Unidades disponibles: {data?.stock}
          </Text>
        </CardBody>

        <CardFooter justify='space-between' alignItems='center' style={{height: '1rem'}}>
            <ItemCount stock={data?.stock || 0} addToCarrito={addToCarrito}/> 
            <Spacer />    
          <Link
            to={`/products/${lastCategory}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="ghost" colorScheme="green" size='sm' fontSize='xs'>
              Volver a Sección Anterior
            </Button>
          </Link>
      
        </CardFooter>
        <Divider />
     
      </Stack>
    </Card>
  );
};

export default ItemDetail;
