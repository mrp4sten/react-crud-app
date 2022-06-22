import { Component } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";

class ListEntity extends Component {
  render() {
    return (
      <Box mt={"4"}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Name Entity</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Hidalgo</Td>
                <Td>
                  <Button m={'2'}>Update</Button>
                  <Button m={'2'}>Delete</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}

export default ListEntity;
