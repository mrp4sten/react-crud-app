import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateEntity from "./components/Entity/CreateEntity";
import ListEntity from "./components/Entity/ListEntity";

import ListMunicipality from "./components/Municipality/ListMunicipality";
import CreateMunicipality from "./components/Municipality/CreateMunicipality";

import ListProviders from "./components/Providers/ListProviders";
import CreateProvider from "./components/Providers/CreateProvider";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navbar></Navbar>
        <Routes path="/" element={<App />}>
          <Route path="createEntity" element={<CreateEntity />}></Route>
          <Route path="updateEntity/:id" element={<CreateEntity />}></Route>
          <Route path="listEntity" element={<ListEntity />}></Route>

          <Route
            path="createMunicipality"
            element={<CreateMunicipality />}
          ></Route>
          <Route
            path="updateMunicipality/:id"
            element={<CreateMunicipality />}
          ></Route>
          <Route path="listMunicipality" element={<ListMunicipality />}></Route>
          
          <Route
            path="createProvider"
            element={<CreateProvider />}
          ></Route>
          <Route
            path="updateProvider/:id"
            element={<CreateProvider />}
          ></Route>
          <Route path="listProviders" element={<ListProviders />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
