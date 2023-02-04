import { Flex, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <Flex
            marginTop={'100px'}
            px={{ base: '25px', md: '45px' }}
            flexDirection="column"
            alignItems="flex-start"
            gap="30px"
            fontFamily="Maven Pro"
        >
            <Heading fontSize={'35px'} fontFamily="Maven Pro">
                Github Stats
            </Heading>
            <GitHubCalendar username="aman9723" />
            <Flex gap={'15px'} flexDirection={{ base: 'column', lg: 'row' }}>
                <Image src="https://github-readme-stats-tau-bice.vercel.app/api/top-langs?username=aman9723&show_icons=true&locale=en&layout=compact"></Image>
                <Image src="https://github-readme-stats-tau-bice.vercel.app/api?username=aman9723&show_icons=true&locale=en"></Image>
            </Flex>
        </Flex>
    );
};

export default Github;
