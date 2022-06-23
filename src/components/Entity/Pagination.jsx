import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Tabs isFitted colorScheme="green" m={"4"}>
      <TabList>
        <Tab onClick={handlePrevious}>Previous</Tab>
        <Tab onClick={handleNext}>Next</Tab>
      </TabList>
    </Tabs>
  );
};

export default Pagination;
