import { IconButton, Input} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderWidget = () => {
  const [orderNumber, setOrderNumber] = React.useState('')

  const navigate = useNavigate()

  const handleBuscar = () => {
    navigate(`/order/${orderNumber}`)
  }

  return (
    <div style={{display: 'flex', gap:'.7rem'}}>
        <Input type='text' value={orderNumber} bg='whitesmoke' color='green.700' focusBorderColor='lightgreen' placeholder='Verifique su orden' onChange={(event) => setOrderNumber(event.target.value)} />
        <IconButton
            colorScheme='orange'
            aria-label='Search database'
            icon={<SearchIcon />}
            onClick={handleBuscar}
        />
    </div>
  )
}

export default OrderWidget