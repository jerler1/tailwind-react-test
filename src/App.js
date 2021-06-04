import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Records";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header/>
        <HomePage />
        <Footer/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
