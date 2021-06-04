import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Records";
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <HomePage />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
