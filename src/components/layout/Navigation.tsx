import { FC } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Container,
  Image,
  Button,
  useColorMode,
  VisuallyHidden,
  Heading,
  useConst,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// type Logo = 'apex' | 'csgo' | 'ow'; maybe later lol
type Logo = 'apex';
interface NavigationProps {
  logo: Logo;
  title: string;
}

const headlineMap = {
  apex: 'Apex Legends',
};

const logoPath = '/src/assets/logo/';

const Navigation: FC<NavigationProps> = ({ logo, title }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const headline = useConst(headlineMap[logo]);

  return (
    <Box bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')}>
      <Container maxW="container.lg">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <Image src={`${logoPath}${logo}.png`} width="50px" />
            <Heading as="h1" size="sm">
              <VisuallyHidden>{headline}</VisuallyHidden>
              {title}
            </Heading>
          </Box>

          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
