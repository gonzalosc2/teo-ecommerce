import React from 'react'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputLeftAddon,
    InputGroup,
    Text,
    FormHelperText,
    FormErrorMessage
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line
const emailValidator = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

const BuyerInfo = ({ carrito, createNewOrder }) => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [telefono, setTelefono] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [confirmedEmail, setConfirmedEmail] = React.useState('')

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (!isFormValid() || !createNewOrder || !carrito.length) {
            return;
        }

        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: carrito,
            createdAt: new Date(),
            total: carrito.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }
        createNewOrder(order)
        navigate('/')
    }

    const equalEmail = email !== confirmedEmail

    const isFormValid = () => {
        return Boolean(nombre.length) && Boolean(apellido.length) && emailValidator(email) && !isNaN(Number(telefono)) && email === confirmedEmail

    }

    return (
        <Box mt='2rem' ml='20%' mr='20%' borderRadius='md' bg='green.50' padding='3%' style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            
            <Text as='b' fontSize='2xl' color='green.600'> Datos de comprador </Text>

            <Box align='start' mb='-2rem' style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <FormControl isRequired>
                    <FormLabel>Nombre(s)</FormLabel>
                    <Input focusBorderColor='lime' type='text' value={nombre} placeholder='Nombre(s)' onChange={(event) => setNombre(event.target.value)}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Apellido(s)</FormLabel>
                    <Input focusBorderColor='lime' type='text' value={apellido} placeholder='Apellido(s)' onChange={(event) => setApellido(event.target.value)}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Teléfono</FormLabel>            
                    <InputGroup>
                        <InputLeftAddon children='+(56)' />
                        <Input focusBorderColor='lime' type='text' value={telefono} placeholder='912 345 678' onChange={(event) => setTelefono(event.target.value)}/>
                    </InputGroup>
                    <FormHelperText> Solo use números, omita espacios. </FormHelperText>
                </FormControl>
                
                <FormControl isRequired>
                    <FormLabel>Correo electrónico</FormLabel>
                    <Input focusBorderColor='lime' type='email' value={email} placeholder='juan@perez.com' onChange={(event) => setEmail(event.target.value)}/>
                </FormControl>

                <FormControl isRequired isInvalid={equalEmail}>
                    <FormLabel>Confirmación de correo electrónico</FormLabel>
                    <Input type='email' value={confirmedEmail} placeholder='juan@perez.com' onChange={(event) => setConfirmedEmail(event.target.value)}/>
                    {!equalEmail ? (
                        <></>
                        ) : (
                        <FormErrorMessage>Correo electrónico debe coincidir con dirección ingresada en casilla previa.</FormErrorMessage>
                        )}
                </FormControl>    
            </Box>

            <Button
                mt='3rem'
                colorScheme='green'
                onClick={handleSubmit}
                isDisabled={!isFormValid()}
                type='submit'
            >
                Finalizar Compra
          </Button>
        </Box>
    )
}

export default BuyerInfo