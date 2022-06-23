import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Entity = (props) => {
  const deleteEntity = async (entityId) => {
    await fetch("http://localhost:8080/entity/delete/" + entityId, {
      method: 'delete'
    });
    
    props.getEntities();
  };

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.entities.map((entity, index) => (
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
            {entity.nameEntity}
          </Heading>
          <Flex justifyContent={"center"}>
            <Button m={"2"} colorScheme="yellow" as={Link} to={"/listEntity/" + entity.id}>
              Update
            </Button>
            <Button
              m={"2"}
              colorScheme="red"
              onClick={() => deleteEntity(entity.id)}
              as={Link} to="/listEntity"
            >
              Delete
            </Button>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Entity;
