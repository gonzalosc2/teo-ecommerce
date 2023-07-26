import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
    Text
  } from '@chakra-ui/react'
import { InfoIcon, CalendarIcon } from '@chakra-ui/icons'

const BuyerInfoOrder = ({order}) => {
    
    const buyerInfo = order.buyer
    const dateTime = new Date(order?.createdAt.seconds*1000).toLocaleString('es-CL')

  return (

    <div style={{marginTop: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        
        <Text as='b' fontSize='4xl' color='green.400'> Detalles de la orden </Text>

        <div style={{marginLeft: '10vw', marginBottom: '2rem', textAlign: 'left'}}>
            <List spacing={2} stylePosition={'initial'}>
                <ListItem>
                    <ListIcon as={InfoIcon} color='green.500' />
                    Nombre: {buyerInfo?.nombre || 'Sin registro'}.
                </ListItem>
                <ListItem>
                    <ListIcon as={InfoIcon} color='green.500' />
                    Apellido: {buyerInfo?.apellido || 'Sin registro'}.
                </ListItem>
                <ListItem>
                    <ListIcon as={CalendarIcon} color='green.500' />
                    Fecha de la orden: {dateTime || 'Sin registro'}.
                </ListItem>
            </List>
        </div>
    </div>
  )
}

export default BuyerInfoOrder