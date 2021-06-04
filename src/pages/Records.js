import React from 'react';
import { Text } from '@chakra-ui/react';
import api from "../api/index";
import RecordsTable from "../components/RecordsTable/RecordsTable";
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
                    <RecordsTable records={data} />
                </main>
         );
    }
};

export default Records;