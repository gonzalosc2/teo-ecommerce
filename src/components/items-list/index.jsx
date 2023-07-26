import React from "react";
import { CircularProgress } from "@chakra-ui/react";
import ItemCard from "../item-card";

const ItemsList = ({ items, loading, category }) => {
  return (
    <div style={containerStyle}>
      {Boolean(loading) ? (
        <CircularProgress
          isIndeterminate
          color="green.400"
          size="50px"
          thickness="15px"
        />
      ) : (
        items.map((item, index) => (
          <ItemCard key={item.title + index} data={item} category={category} />
        ))
      )}
    </div>
  );
};

export default ItemsList;

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 15,
  paddingTop: 10,
};
