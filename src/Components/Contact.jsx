import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';
import { BsPhone } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    const { contactRef } = React.useContext(AppContext);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            px={{ base: '25px', md: '45px' }}
            justifyContent="space-evenly"
            marginTop={'80px'}
            flexDirection="column"
            ref={contactRef}
            bg={colorMode == 'light' ? '#ffc200' : null}
        >
            <Heading
                fontSize={'35px'}
                fontFamily="Maven Pro"
                textAlign={'left'}
                paddingY="20px"
            >
                Contact
            </Heading>
            <Flex
                gap="30px"
                alignItems="left"
                justifyContent={'center'}
                flexDir={'column'}
            >
                <Flex flexDir={'column'} gap="30px">
                    <Flex gap={'15px'} alignItems="center">
                        <BsPhone size={25}></BsPhone>
                        <Text fontWeight={'bold'}>+91-9151521879</Text>
                    </Flex>
                    <Flex
                        gap={'15px'}
                        wordBreak="break-word"
                        alignItems={'center'}
                    >
                        <SiGmail
                            size={22}
                            cursor="pointer"
                            onClick={() =>
                                window.open(
                                    'mailto:amansingh9723chauhan@gmail.com',
                                    '_blank'
                                )
                            }
                        ></SiGmail>
                        <Text fontWeight={'bold'} textAlign="left">
                            amansingh9723chauhan@gmail.com
                        </Text>
                    </Flex>
                </Flex>
                <Flex gap={'40px'} paddingBottom="20px">
                    <AiFillLinkedin
                        size={30}
                        cursor={'pointer'}
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/aman9723/',
                                '_blank'
                            )
                        }
                    ></AiFillLinkedin>
                    <AiFillGithub
                        size={30}
                        cursor={'pointer'}
                        onClick={() =>
                            window.open('https://github.com/aman9723', '_blank')
                        }
                    ></AiFillGithub>
                    <IoLogoWhatsapp
                        size={27}
                        cursor={'pointer'}
                        onClick={() =>
                            window.open('https://wa.me/919151521879', '_blank')
                        }
                    ></IoLogoWhatsapp>
                    <FaDiscord
                        size={30}
                        cursor={'pointer'}
                        onClick={() =>
                            window.open(
                                'https://discordapp.com/users/796310804391657483',
                                '_blank'
                            )
                        }
                    ></FaDiscord>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Contact;
