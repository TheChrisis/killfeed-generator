import { Container } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import KillfeedForm from './components/KillfeedForm';

const App = () => {
  return (
    <>
      <Navigation title="Killfeed Generator" />
      <Container maxW="container.lg">
        <KillfeedForm />
      </Container>
    </>
  );
};

export default App;
