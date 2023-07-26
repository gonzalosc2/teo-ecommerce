import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "../item-count";
import { AppContext } from "../../context";


const ItemCard = ({ data, category }) => {

  const { addProductToCarrito } = React.useContext(AppContext);

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
    <Card maxW="sm" variant={'filled'} boxShadow='2px 2px 5px darkgreen'>
      <CardBody align='center'  backgroundColor='gray.200' >
        <Image height='150px' src={data?.imageURL} alt={data?.alt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data?.title}</Heading>
          <Text>{data?.description}</Text>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link to={`/product/${data?.id}`} state={{category: category}} style={{textDecoration: 'none'}}>
              <Button variant="ghost" colorScheme="green" size='lg'>
                Detalle
              </Button>
            </Link>
            <Text color="green.600" fontSize="3xl" align='end' fontWeight='700' >
              ${parseInt(data?.price).toLocaleString("es-cl")}
            </Text>
          </div>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify='space-between'>
        <ItemCount stock={data?.stock} addToCarrito={addToCarrito} />
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
