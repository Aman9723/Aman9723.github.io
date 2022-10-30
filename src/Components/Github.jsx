import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <Flex
            paddingTop={'80px'}
            px={{ base: '25px', md: '45px' }}
            flexDirection="column"
            alignItems="flex-start"
            gap="80px"
        >
            <GitHubCalendar
                username="aman9723"
                year={new Date().getFullYear()}
            />

            <Flex gap={'15px'} flexDirection={{ base: 'column', lg: 'row' }}>
                <Image src="https://github-readme-stats.vercel.app/api/top-langs?username=aman9723&show_icons=true&locale=en&layout=compact"></Image>
                <Image src="https://github-readme-stats.vercel.app/api?username=aman9723&show_icons=true&locale=en"></Image>
            </Flex>
        </Flex>
    );
};

export default Github;
