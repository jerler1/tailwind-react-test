import React from 'react';
import {
    Table,
    TableCaption,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react';
import api from "../api/index";
import { useQuery } from "react-query";

const fetchRecords = async () => await api.index();


const Records = () => {
    const { status, data, error } = useQuery("records", fetchRecords);

    switch (status) {
        case "loading":
            return <Text>Loading...</Text>;
        case "error":
            return <Text color="tomato">{error.message}</Text>;
        default:
            return (
                <main className="container mx-auto">
                <Table variant="simple">
              <TableCaption>Click on any data to edit 📝 it.</TableCaption>
              <Thead>
                <Tr>
                  <Th>Artist</Th>
                  <Th>Album</Th>
                  <Th>Year</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ id, artist, album, year }) => (
                  <Tr key={id} data-id={id}>
                    <Td>
                      {artist}
                    </Td>
                    <Td>
                      {album}
                    </Td>
                    <Td>
                     {year}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </main>
         );
    }
};

export default Records;