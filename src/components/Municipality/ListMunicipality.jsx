import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Municipality from "./Municipality";

const ListMunicipality = () => {
  const [municipality, setMunicipality] = useState([]);

  const url = "http://localhost:8080/municipality/list";

  const fetchMunicipality = async (urlApi) => {
    await fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setMunicipality(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMunicipality(url);
  }, []);

  const getMunicipalities = () => {
    fetchMunicipality(url);
  };

  return (
    <Flex justifyContent={"center"}>
      <Municipality municipalities={municipality} getMunicipalities={getMunicipalities} />
    </Flex>
  );
};

export default ListMunicipality;
