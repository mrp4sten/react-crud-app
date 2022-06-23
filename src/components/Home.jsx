import { Box, Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box
        p={5}
        mt={4}
        boxShadow={"xl"}
        borderRadius={"md"}
        textAlign={"center"}
      >
        <Heading mt={"4"} fontSize="xl">
          My first React App with Chakra UI
        </Heading>
        <Text mt={"4"} textAlign={"center"}>
          This is my first application built with React Js with Hook, Chakra UI,
          etc. This application consume a Spring Boot API with a CRUD that works
          with Firebase
        </Text>
        <Text mt={"4"} textAlign={"justify"}>
          I'm a Jr Developer for more than one year. IT student since 2016 and
          next year 2023 I will become an IT Engineer, Full Stack and DevOps
          Developer, In 2019 I became a Computer Technician At the end of 2021 I
          became a Senior IT Technician. My goal is to become a Full Stack and
          DevOps developer and I hope at some point to share my experience and
          passion for technology with the community. I currently have experience
          developing web applications and maintaining web services and
          applications built with technologies such as Java, JavaScript, NodeJS,
          MongoDB, Mysql, MSSQL, PostgreSQL, CSS, HTML5, using tools such as
          SonarQube and Git for CI/CD, Handling Bash Scripting and controlling
          my working environment with Zsh and Arch Linux.
        </Text>
        <Divider />
        <Text mt={"4"}>
          Go to my GitHub profile here{" "}
          <Link color="teal.500" href="https://github.com/mrp4sten" isExternal>
            Click me!
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
