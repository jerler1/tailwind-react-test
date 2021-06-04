import { Text } from "@chakra-ui/react";

import React from 'react';

const Footer = () => {
    return (
        <footer className="container mx-auto py-2">
            <Text fontSize="xs">{new Date().getFullYear()} Records</Text>
        </footer>
    );
};

export default Footer;