import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import React from 'react';

let obj = {
    HTML5: '/html.png',
    CSS3: '/css3.png',
    JavaScript: '/javascript.png',
    'React.js': '/react.png',
    'Chakra UI': '/chakra.png',
    'Node.js': '/node-js.png',
    'Express.js': '/express.png',
    Mongodb: '/mongodb.png',
    Redux: '/redux.png',
    TypeScript: '/typescript.png',
    Git: '/git.png',
    Github: '/github.png',
    'VS Code': '/vscode.png',
    Postman: '/postman.png',
    'Next.js': '/next.png',
    Redis: '/redis.png',
};

const Projects = ({ img, title, desc, code, live, stack }) => {
    return (
        <Flex
            fontFamily="Maven Pro"
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={'space-between'}
            boxSizing={'border-box'}
            px={{ base: '25px', md: '45px' }}
            gap="60px"
            marginBottom={'80px'}
        >
            <Box
                textAlign={'left'}
                display="flex"
                flexDirection={'column'}
                gap="30px"
            >
                <Heading fontSize={'25px'} fontFamily="Maven Pro">
                    {title}
                </Heading>
                {/* templateColumns="repeat(5, 40px)" */}
                <Flex gap={'10px'} wrap="wrap">
                    {stack.map((item) => (
                        <Tooltip label={item} key={item}>
                            <Image src={obj[item]} boxSize="10" />
                        </Tooltip>
                    ))}
                </Flex>
                <Text fontSize={'18px'} color="#5b5b5b">
                    {desc}
                </Text>
                <ButtonGroup zIndex={-1}>
                    <Button
                        onClick={() => window.open(code, '_blank')}
                        color={'#fff'}
                        bg={'#474559'}
                        _hover={{ bg: '#ffc200' }}
                    >
                        Code
                    </Button>

                    <Button
                        onClick={() => window.open(live, '_blank')}
                        color={'#fff'}
                        bg={'#474559'}
                        _hover={{ bg: '#ffc200' }}
                    >
                        Live
                    </Button>
                </ButtonGroup>
            </Box>
            <Image
                src={img}
                border={'1px solid #5b5b5b'}
                width="500px"
                w={{ base: '100%', lg: '500px' }}
            />
        </Flex>
    );
};

export default Projects;
