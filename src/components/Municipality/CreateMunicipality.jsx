import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CreateMunicipality = () => {
  const [nameMunicipality, setNameMunicipality] = useState("");
  const [nameEntity, setNameEntity] = useState("");
  const [display, setDisplay] = useState("none");
  const [status, setStatus] = useState("success");
  const [title, setTitle] = useState("exmple");
  const [description, setDescription] = useState("example");

  const url = "http://localhost:8080/municipality/add";

  const onChangeNameMunicipality = (e) => {
    setNameMunicipality(e.target.value);
  };

  const onChangeNameEntity = (e) => {
    setNameEntity(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const MunicipalityDto = {
      entityName: nameEntity,
      municipalityName: nameMunicipality
    };

    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(MunicipalityDto),
    });

    if (res.status === 200) {
      setDisplay("");
      setStatus("success");
      setTitle("Success!");
      setDescription("Municipality was created successfully");
    } else {
      setDisplay("");
      setStatus("error");
      setTitle("Error!");
      setDescription("Municipality was not created");
    }
  };

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box
          p={5}
          boxShadow={"xl"}
          borderRadius={"md"}
          width={"96"}
          bg={"blackAlpha.800"}
          mt={"4"}
        >
          <Heading
            mt={"4"}
            fontSize={"xl"}
            textAlign={"center"}
            color={"white"}
          >
            Create Entity
          </Heading>
          <form onSubmit={onSubmit}>
            <FormControl mt={"4"} color={"white"}>
              <FormLabel htmlFor="nameMunicipality">Municipality Name</FormLabel>
              <Input
                id="nameMunicipality"
                name="nameMunicipality"
                onChange={onChangeNameMunicipality}
              ></Input>
              <FormLabel htmlFor="nameEntity">Entity Name</FormLabel>
              <Input
                id="nameEntity"
                name="nameEntity"
                onChange={onChangeNameEntity}
              ></Input>
              <Button colorScheme="teal" type={"submit"} mt={"2"}>
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Flex>
      <Flex mt={"4"} justifyContent={"center"} alignItems={"center"}>
        <Box display={display}>
          <Alert
            status={status}
            w={"90"}
            h={"10"}
            flexDirection={"row"}
            borderRadius={"full"}
          >
            <Flex flexDirection={"row"}>
              <AlertIcon />
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>{description}</AlertDescription>
            </Flex>
            <Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={() => setDisplay("none")}
              />
            </Box>
          </Alert>
        </Box>
      </Flex>
    </>
  );
};

export default CreateMunicipality;
