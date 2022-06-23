import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreateEntity = () => {
  const [nameEntity, setNameEntity] = useState("");

  const url = "http://localhost:8080/entity/add";

  const onChangeNameEntity = (e) => {
    setNameEntity(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const EntityDto = {
      "nameEntity": nameEntity
    }

    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(EntityDto)
    });
  };

  return (
    <Flex justifyContent={"center"}>
      <Box
        p={5}
        boxShadow={"xl"}
        borderRadius={"md"}
        width={"96"}
        bg={"blackAlpha.800"}
        mt={"4"}
      >
        <Heading mt={"4"} fontSize={"xl"} textAlign={"center"} color={"white"}>
          Create Entity
        </Heading>
        <form onSubmit={onSubmit}>
          <FormControl mt={"4"} color={"white"}>
            <FormLabel htmlFor="nameEntity">Name</FormLabel>
            <Input
              id="nameEntity"
              name="nameEntity"
              onChange={onChangeNameEntity}
            ></Input>
            <FormHelperText>Write entity name</FormHelperText>
            <Button colorScheme="teal" type={"submit"}>
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};

export default CreateEntity;
