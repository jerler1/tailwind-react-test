import React from 'react';
import { Text } from '@chakra-ui/react';
import api from "../api/index";
import RecordsTable from "../components/RecordsTable/RecordsTable";
import { useQuery } from "react-query";
import RecordsForm from "../components/RecordsForm";

const fetchRecords = async () => await api.index();


const Records = () => {
    const { status, data, error } = useQuery("records", fetchRecords);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(new FormData(event.target));
      };

    switch (status) {
        case "loading":
            return <Text>Loading...</Text>;
        case "error":
            return <Text color="tomato">{error.message}</Text>;
        default:
            return (
                <main className="container mx-auto">
                    <RecordsTable records={data} />
                    <RecordsForm handler={handleSubmit} />
                </main>
         );
    }
};

export default Records;