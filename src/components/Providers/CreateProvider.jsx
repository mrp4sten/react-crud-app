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
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CreateProvider = () => {
  const [rfc, setRfc] = useState("");
  const [bussinesName, setBussinesName] = useState("");
  const [contactName, setContactName] = useState("");
  const [street, setStreet] = useState("");
  const [interiorNumber, setInteriorNumber] = useState("");
  const [externalNumber, setExternalNumber] = useState("");
  const [suburb, setSuburb] = useState("");
  const [location, setLocation] = useState("");
  const [entity, setEntity] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const [display, setDisplay] = useState("none");
  const [statusAlert, setStatusAlert] = useState("success");
  const [title, setTitle] = useState("exmple");
  const [description, setDescription] = useState("example");

  const url = "http://localhost:8080/provider/add";

  const onChangeRfc = (e) => {
    setRfc(e.target.value);
  };

  const onChangeBussinesName = (e) => {
    setBussinesName(e.target.value);
  };

  const onChangeContactName = (e) => {
    setContactName(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeInteriorNumber = (e) => {
    setInteriorNumber(e.target.value);
  };

  const onChangeExternalNumber = (e) => {
    setExternalNumber(e.target.value);
  };

  const onChangeSuburb = (e) => {
    setSuburb(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onChangeEntity = () => {
    setEntity(document.getElementById("entity").value);
  };

  const onChangeMunicipality = () => {
    setMunicipality(document.getElementById("municipality").value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const ProviderDto = {
      rfc: rfc,
      bussinesName: bussinesName,
      contactName: contactName,
      street: street,
      interiorNumber: interiorNumber,
      externalNumber: externalNumber,
      suburb: suburb,
      location: location,
      entity: entity,
      municipality: municipality,
      country: country,
      postalCode: postalCode,
      email: email,
      phoneNumber: phoneNumber,
      status: status,
    };

    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProviderDto),
    });

    if (res.status === 200) {
      setDisplay("");
      setStatusAlert("success");
      setTitle("Success!");
      setDescription("Provider was created successfully");
    } else {
      setDisplay("");
      setStatusAlert("error");
      setTitle("Error!");
      setDescription("Provider was not created");
    }
  };

  const [municipalityDropdown, setMunicipalityDropdown] = useState([]);

  const fetchMunicipality = async () => {
    await fetch("http://localhost:8080/municipality/list")
      .then((response) => response.json())
      .then((data) => setMunicipalityDropdown(data))
      .catch((error) => console.error(error));
  };

  const [entityDropdown, setEntityDropdown] = useState([]);

  const fetchEntities = async () => {
    await fetch("http://localhost:8080/entity/list")
      .then((response) => response.json())
      .then((data) => setEntityDropdown(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEntities();
    fetchMunicipality();
  }, []);

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
            Create Provider
          </Heading>
          <form onSubmit={onSubmit}>
            <FormControl mt={"4"} color={"white"}>
              <FormLabel htmlFor="rfx">RFC</FormLabel>
              <Input id="rfc" name="rfc" onChange={onChangeRfc}></Input>
              <FormLabel htmlFor="bussinesName">Bussiness Name</FormLabel>
              <Input
                id="bussinesName"
                name="bussinesName"
                onChange={onChangeBussinesName}
              ></Input>
              <FormLabel htmlFor="contactName">Contact Name</FormLabel>
              <Input
                id="contactName"
                name="contactName"
                onChange={onChangeContactName}
              ></Input>
              <FormLabel htmlFor="street">Street</FormLabel>
              <Input
                id="street"
                name="street"
                onChange={onChangeStreet}
              ></Input>
              <FormLabel htmlFor="interiorNumber">Interior Number</FormLabel>
              <Input
                id="interiorNumber"
                name="interiorNumber"
                onChange={onChangeInteriorNumber}
              ></Input>
              <FormLabel htmlFor="externalNumber">External Number</FormLabel>
              <Input
                id="externalNumber"
                name="externalNumber"
                onChange={onChangeExternalNumber}
              ></Input>
              <FormLabel htmlFor="suburb">Suburb</FormLabel>
              <Input
                id="suburb"
                name="suburb"
                onChange={onChangeSuburb}
              ></Input>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                id="location"
                name="location"
                onChange={onChangeLocation}
              ></Input>
              <FormLabel htmlFor="entity">Entity</FormLabel>
              <Select
                id="entity"
                name="entity"
                onClick={onChangeEntity}
                placeholder="Select Entity"
              >
                {entityDropdown.map((entityId, index) => (
                  <option key={index} value={entityId.nameEntity}>
                    {entityId.nameEntity}
                  </option>
                ))}
              </Select>
              <FormLabel htmlFor="municipality">Municipality</FormLabel>
              <Select
                id="municipality"
                name="municipality"
                onChange={onChangeMunicipality}
                placeholder="Select Municipality"
              >
                {municipalityDropdown
                  .filter(({ entityName }) => entityName === entity)
                  .map((municipalityId, index) => (
                    <option key={index} value={municipalityId.municipalityName}>
                      {municipalityId.municipalityName}
                    </option>
                  ))}
              </Select>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                name="country"
                onChange={onChangeCountry}
              ></Input>
              <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
              <Input
                id="postalCode"
                name="postalCode"
                onChange={onChangePostalCode}
              ></Input>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" name="email" onChange={onChangeEmail}></Input>
              <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                onChange={onChangePhoneNumber}
              ></Input>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Input
                id="status"
                name="status"
                onChange={onChangeStatus}
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
            status={statusAlert}
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

export default CreateProvider;
