import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TabsBar = ({ current, items }) => {
  const navigate = useNavigate();

  const handleChange = (newValue) => {
    // navigate("/products/" + items[newValue].id);
    navigate("/products/" + items[newValue].id)
  };

  // fix para index de TabsBar para que sea dinámico y al refrescar no mantenga una posición fija
  let index = 0;
  for (index = 0; items.length; index++) {
    if (items[index].id === current) {
      break;
    }
  }

  return (
    <Tabs
      index={index}
      onChange={handleChange}
      variant="soft-rounded"
      colorScheme="green"
      align="end"
      style={{ margin: 10 }}
    >
      <TabList>
        {items?.map((item, index) => {
          return <Tab key={item.id + index}>{item.title}</Tab>;
        })}
      </TabList>
    </Tabs>
  );
};

export default TabsBar;
