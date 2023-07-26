import React from "react";
import ItemDetail from "../../components/item-detail";
import { CircularProgress } from "@chakra-ui/react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useToast } from '@chakra-ui/react'

const DetailsContainer = () => {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { id } = useParams();
  const location = useLocation();
  const lastCategory = location.state?.category || "bio";
  const navigate = useNavigate()

  const toast = useToast()

  React.useEffect(() => {
    setLoading(true);
   
    const db = getFirestore()
    const getItem = doc(db, 'items', id)
   
    getDoc(getItem)
    .then((snapshot) => {
      setLoading(false)
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
        console.log(snapshot.data())
      }
      else {
        toast({
          title: `El producto ingresado no existe.`,
          status: 'error',
          duration: 3000,
          isClosable: false,
        })
        navigate('/')
      }
    }
    ) 
    .catch((err) => {
      console.log(err)
    })
  }, [id, toast, navigate]);

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
    <ItemDetail data={item} lastCategory={lastCategory}/>
  );
};

export default DetailsContainer;
