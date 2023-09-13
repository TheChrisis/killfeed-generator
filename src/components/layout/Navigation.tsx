import { FC } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Container,
  Image,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// type Logo = 'apex' | 'csgo' | 'ow'; maybe later lol
type Logo = 'apex';
interface NavigationProps {
  logo: Logo;
  title: string;
}

const logoPath = 'src/assets/logo/';

const Navigation: FC<NavigationProps> = ({ logo, title }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Container maxW="container.lg">
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          marginLeft={-26}
          marginRight={-26}
        >
          <Box display={'flex'} alignItems={'center'}>
            <Image src={`${logoPath}${logo}.png`} width="50px" />
            {title}
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
