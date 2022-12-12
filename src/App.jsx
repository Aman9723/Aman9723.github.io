import { Heading } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { AppContext } from './Context/ContextApi';

function App() {
    const { projectRef } = React.useContext(AppContext);

    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Github />
            <Heading
                fontSize={'35px'}
                fontFamily="Maven Pro"
                paddingTop="100px"
                paddingBottom={'20px'}
                textAlign="left"
                px={{ base: '25px', md: '45px' }}
                ref={projectRef}
            >
                Projects
            </Heading>
            <Projects
                img="/topsurvey.png"
                title="Top Survey"
                desc="TopSurvey offers a free online survey tool that helps to create and run surveys to capture the voices of people who matter most to you."
                code="https://github.com/Aman9723/smooth-dock-1057"
                live="https://topsurvey.vercel.app/"
                stack={[
                    'HTML5',
                    'CSS3',
                    'React.js',
                    'Redux',
                    'Chakra UI',
                    'Express.js',
                    'Node.js',
                    'Mongodb',
                ]}
            />
            <Projects
                img="/kickstarter.png"
                title="Kickstarter Clone"
                desc='Kickstarter is an American public benefit corporation based
            in Brooklyn, New York, that maintains a global crowdfunding
            platform focused on creativity. The companys stated mission
            is to "help bring creative projects to life".'
                code="https://github.com/Aman9723/brawny-plough-6910"
                live="https://the-great-aman9723-site.netlify.app/"
                stack={['HTML5', 'CSS3', 'React.js', 'Chakra UI']}
            />
            <Projects
                img="/codecov.png"
                title="Codecov Clone"
                desc="Codecov is the leading, dedicated code coverage solution. Codecov provides metrics and insights into the results of tests through code coverage reports."
                code="https://github.com/Nasirimam/resilient-gate-1588"
                live="https://fluffy-zabaione-722b2d.netlify.app/"
                stack={['HTML5', 'CSS3', 'JavaScript']}
            />
            <Projects
                img="/lyst.png"
                title="Lyst Clone"
                desc="This is a clone of Lyst. It is a global fashion search platform, offering fashion products from the world's leading fashion brands and stores online."
                code="https://github.com/Aman9723/usable-trouble-1944"
                live="https://profound-squirrel-2536cb.netlify.app/"
                stack={['HTML5', 'CSS3', 'JavaScript']}
            />
            <Contact />
        </div>
    );
}

export default App;
