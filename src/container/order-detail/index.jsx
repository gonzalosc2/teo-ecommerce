import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Button, CircularProgress, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import ItemListCart from '../../components/items-list-cart'
import BuyerInfoOrder from '../../components/buyer-info-order';

const Order = () => {
    const [order, setOrder] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const { orderId } = useParams();
    const navigate = useNavigate()

    React.useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const getItem = doc(db, 'orders', orderId)
   
        getDoc(getItem)
        .then((snapshot) => {
            setLoading(false)

            if (snapshot.exists()) {
                setOrder({id: snapshot.id, ...snapshot.data()})
                setSuccess(true)
            }
            else {
                setSuccess(false)
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }
        }) 
        .catch((err) => {
            console.error(err)
        })
    }, [orderId, navigate])

    return Boolean(loading) ? (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
            <CircularProgress
            isIndeterminate
            color="green.400"
            size="50px"
            thickness="15px"
        />
        </div>
        ) : (
            Boolean(success) ? (
                <>
                    <BuyerInfoOrder order={order} />

                    <ItemListCart carrito={order.items}/>

                    <div style={{marginTop: '3rem', marginBottom: '3rem', textAlign: 'center'}}>
                        <Link to={'/'}>
                            <Button colorScheme='green' variant='solid'>
                                Volver
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', margin:'35vh 10% 0 10%'}}>
                    <Text fontSize='3xl' as='b' color='orange.400'>
                        Lo sentimos, la orden que usted busca no ha sido encontrada.
                    </Text>   
                    <Text fontSize='2xl' as='b' color='orange.400'>
                        Usted será redireccionado al inicio en breves segundos. 
                    </Text>   
                </div>
            )
        )

        
};

export default Order