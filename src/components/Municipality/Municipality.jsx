import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Municipality = (props) => {
  const deleteEntity = async (municipalityId) => {
    await fetch("http://localhost:8080/municipality/delete/" + municipalityId, {
      method: "delete",
    });

    props.getMunicipalities();
  };

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      {props.municipalities.map((municipality, index) => (
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
            {municipality.municipalityName}
          </Heading>
          <Heading
            fontSize={"small"}
            textAlign={"center"}
            color={"white"}
          >
            {municipality.entityName}
          </Heading>
          <Flex justifyContent={"center"}>
            <Button
              m={"2"}
              colorScheme="yellow"
              as={Link}
              to={"/updateMunicipality/" + municipality.id}
            >
              Update
            </Button>
            <Button
              m={"2"}
              colorScheme="red"
              onClick={() => deleteEntity(municipality.id)}
            >
              Delete
            </Button>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Municipality;
