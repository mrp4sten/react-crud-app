import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Provider = (props) => {
  const deleteProvider = async (providerId) => {
    await fetch("http://localhost:8080/provider/delete/" + providerId, {
      method: 'delete'
    });
    
    props.getProviders();
  };

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.providers.map((provider, index) => (
        <GridItem
          key={index}
          p={5}
          boxShadow={"xl"}
          borderRadius={"md"}
          width={"60"}
          bg={"blackAlpha.800"}
          m={"4"}
        >
          <Heading
            mt={"4"}
            fontSize={"xl"}
            textAlign={"center"}
            color={"white"}
          >
            {provider.bussinesName} {provider.rfc}
          </Heading>
          <Heading
            fontSize={"small"}
            textAlign={"center"}
            color={"white"}
          >
            Contact Name:{provider.contactName}
          </Heading>
          <Heading
            fontSize={"small"}
            textAlign={"center"}
            color={"white"}
          >
            Contact:{provider.email} {provider.phoneNumber}
          </Heading>
          <Flex justifyContent={"center"}>
            <Button m={"2"} colorScheme="yellow" as={Link} to={"/updateProvider/" + provider.id}>
              Update
            </Button>
            <Button
              m={"2"}
              colorScheme="red"
              onClick={() => deleteProvider(provider.id)}
            >
              Delete
            </Button>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Provider;
