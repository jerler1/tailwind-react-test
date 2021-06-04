import {
    Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react';
  import PropTypes from "prop-types";
  import React from 'react';
  import EditableText from "./EditableText";
  
  const RecordsTable = ( {records} ) => {

    function handleUpdate(event) {

    }

      return (
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
                {records.map(({ id, artist, album, year }) => (
                  <Tr key={id} data-id={id}>
                    <Td>
                        <EditableText value={artist} handler={handleUpdate} />
                    </Td>
                    <Td>
                        <EditableText value={album} handler={handleUpdate} />
                    </Td>
                    <Td>
                        <EditableText value={year} handler={handleUpdate} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
      );
  };

  RecordsTable.propTypes = {
    records: PropTypes.arrayOf(
      PropTypes.exact({
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };
  
  export default RecordsTable;