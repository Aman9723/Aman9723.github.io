import React from 'react';
import styles from './css/Navbar.module.css';
import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Spacer,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                alignItems="center"
                gap="2"
                px="40px"
                py="10px"
                w="100%"
                pos="sticky"
                top="0px"
                bgColor="white"
                border="1px solid lightgray"
            >
                <Box p="2">
                    <Heading
                        fontSize="20px"
                        color="rgba(0,0,0,.9)"
                        fontWeight="bold"
                    >
                        AMAN
                    </Heading>
                </Box>
                <Spacer />
                <IconButton
                    size={'md'}
                    icon={isOpen ? <GrClose /> : <GiHamburgerMenu />}
                    onClick={isOpen ? onClose : onOpen}
                    display={{ base: 'flex', md: 'none' }}
                    alignItems="center"
                    justifyContent="center"
                    bg="transparent"
                ></IconButton>
                <Box
                    display={{ base: 'none', md: 'flex' }}
                    gap="50px"
                    color="#00000080"
                >
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        color="#ffc200"
                        fontWeight="bold"
                    >
                        Home
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        About
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Skills
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Projects
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Contact
                    </Heading>
                </Box>
            </Flex>

            {isOpen ? (
                <VStack
                    pb={4}
                    display={{ base: 'flex', md: 'none' }}
                    gap="10px"
                    color="#00000080"
                    pos="fixed"
                    w="100%"
                    pt="10px"
                    className={styles.responsive}
                >
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        color="#ffc200"
                        fontWeight="bold"
                    >
                        Home
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        About
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Skills
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Projects
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        Contact
                    </Heading>
                    <Divider />
                </VStack>
            ) : null}
        </>
    );
};

export default Navbar;
