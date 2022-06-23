import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Flex bg={"blackAlpha.800"} alignItems={"center"} boxShadow={"xl"} w={"100%"}>
        <Box p={"2"}>
          <ChakraLink as={Link} to={"/"}>
            <Image
              boxSize={"40px"}
              src={"/static/img/chakra-ui-logo.png"}
              alt={"logo"}
            ></Image>
          </ChakraLink>
        </Box>
        <Spacer></Spacer>
        <Box p={"2"} marginRight={"7"}>
          <Menu isLazy>
            <MenuButton color="white">Entity</MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/listEntity">
                List
              </MenuItem>
              <MenuItem as={Link} to="/createEntity">
                Create
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
