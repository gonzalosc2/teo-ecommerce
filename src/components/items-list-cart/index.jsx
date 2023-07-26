import React from 'react'
import { TableContainer, TableCaption, Table, Thead, Tbody, Tr, Th, Td, Text} from "@chakra-ui/react";

const ItemListCart = ({carrito}) => {

    const totalValue = carrito.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    return (
        <TableContainer>
            <Table variant='simple' size='lg'>
            <TableCaption placement='top'>Resumen de carrito</TableCaption>
            <Thead>
                <Tr>
                <Th>Ítem</Th>
                <Th>Nombre</Th>
                <Th>Precio unitario x Cantidad</Th>
                <Th isNumeric>Valor total</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                carrito.map((item, index) => (
                    <Tr key={item?.id + index}>
                    <Td> <img src={item?.imageURL} alt={item?.title} style={{width: 40}}/> </Td>
                    <Td> {item.title} </Td>
                    <Td> {`$${parseInt(item?.price).toLocaleString("es-cl")} x ${item?.quantity}`} </Td>
                    <Td isNumeric>{`$${parseInt(item?.price*item?.quantity).toLocaleString("es-cl")}`}</Td>
                    </Tr>
                ))
                }
                <Tr>
                    <Td></Td>
                    <Td><Text fontSize='xl' color='green.500' as='b'>Total Compra</Text></Td> 
                    <Td></Td>
                    <Td isNumeric> <Text fontSize='xl' color='green.500' as='b'>${parseInt(totalValue).toLocaleString('es-CL')}</Text> </Td>
                    </Tr>
            </Tbody>
            </Table>
        </TableContainer>
        )
}

export default ItemListCart