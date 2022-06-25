import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Provider from "./Provider";

const ListProviders = () => {
  const [provider, setProvider] = useState([]);

  const url = "http://localhost:8080/provider/list";

  const fetchProvider = async (urlApi) => {
    await fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setProvider(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProvider(url);
  }, []);

  const getProviders = () => {
    fetchProvider(url);
  };

  return (
    <Flex justifyContent={"center"}>
      <Provider providers={provider} getProviders={getProviders} />
    </Flex>
  );
};

export default ListProviders;
