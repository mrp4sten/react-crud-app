import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Entity from "./Entity";
import Pagination from "./Pagination";

const ListEntity = () => {
  const [entity, setEntity] = useState([]);

  const url = "http://localhost:8080/entity/list";

  const fetchEntities = async (urlApi) => {
    await fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setEntity(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEntities(url);
  }, []);

  const getEntities = () => {
    fetchEntities(url);
  };

  return (
    <Flex justifyContent={"center"}>
      {/* <Pagination/> */}
      <Entity entities={entity} getEntities={getEntities}/>
    </Flex>
  );
};

export default ListEntity;
