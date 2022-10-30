import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';

const About = () => {
    const { aboutRef } = React.useContext(AppContext);
    return (
        <Flex
            px={{ base: '25px', md: '45px' }}
            paddingTop={'80px'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap="60px"
            ref={aboutRef}
        >
            <Box
                textAlign={'left'}
                gap="15px"
                display={'flex'}
                flexDirection={'column'}
            >
                <Heading fontSize={'35px'} fontFamily="Maven Pro">
                    About
                </Heading>
                <Text fontSize={'18px'} color={'#5b5b5b'} lineHeight="1.5">
                    Hi 👋, my name is Aman Singh Chauhan. I am a 20 year old
                    energetic and enthusiastic web developer. Currently,
                    learning full stack web development from Masai School.
                    <br />
                    Always open to learn new technologies and keen to connect
                    with like minded people. Activities I am involved in are
                    fitness, trading and gaming.
                </Text>
            </Box>
            <Image
                src="/profilePhoto.png"
                borderRadius={'50%'}
                boxSize="200"
                border={'1px solid #5b5b5b'}
            ></Image>
        </Flex>
    );
};

export default About;
