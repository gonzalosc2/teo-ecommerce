import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemsList from "../../components/items-list";
import TabsBar from "../../components/tabs-bar";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

const CATEGORIES = [
  { id: "bio", title: "Biografía" },
  { id: "sci", title: "Sci Fi" },
];

const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  const current = Boolean(CATEGORIES.some((cat) => cat.id === category))
    ? category
    : "bio";

  React.useEffect(() => {
    if (!CATEGORIES.some((cat) => cat.id === category)) {
      navigate("/products/bio");
    }
  }, [category, navigate]);

  React.useEffect(() => {
    setLoading(true);
    
    const db = getFirestore()
    const getCollection = collection(db, 'items')

    if (CATEGORIES.some(cat => cat.id === category)) {
      const q = query(getCollection, where('categoryId', '==', category))
      getDocs(q)
      .then((snapshot) => {
        setLoading(false)
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        console.log(snapshot)
      })
    }  
  }, [category]);

  return (
    <div>
      <TabsBar current={current} items={CATEGORIES} />
      <div style={{ padding: 50 }}>
        <ItemsList items={items} loading={loading} category={current} />
      </div>
    </div>
  );
};

export default ItemContainer;