import { Box, Container } from '@chakra-ui/react';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Navigation';
import KillfeedForm from './components/killfeed/KillfeedForm';
import { useEffect, useState } from 'react';

const path = '/src/assets/backgrounds/';
const backgrounds = [
  `${path}caustic.jpg`,
  `${path}wraith.jpg`,
  `${path}ash.jpg`,
  `${path}loba.jpg`,
];

const getRandomBackground = () =>
  `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`;

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    setBackgroundImage(getRandomBackground());
  }, []);

  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundColor="transparent"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100%"
      position="relative"
      pb={{ base: '100px', md: '70px' }}
    >
      <Navigation title="Killfeed Generator" logo="apex" />
      <Container maxW="container.lg" my={50}>
        <KillfeedForm />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
