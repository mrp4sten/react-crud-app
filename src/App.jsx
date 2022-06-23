import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import CreateEntity from './components/Entity/CreateEntity'
import ListEntity from './components/Entity/ListEntity'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
     <ChakraProvider>
      <Navbar></Navbar>
      <Routes path='/' element={<App/>}>
       <Route path='createEntity' element={<CreateEntity/>}></Route>
       <Route path='updateEntity/:id' element={<CreateEntity/>}></Route>
       <Route path='listEntity' element={<ListEntity/>}></Route>
       <Route path='/' element={<Home/>}></Route>
      </Routes>
     </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;
