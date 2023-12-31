import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Tooltip label={label} placement="top">
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Tooltip>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position="absolute"
      bottom="0"
      left="0"
      right="0"
    >
      <Container
        as={Stack}
        maxW={'5xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize={10}>Placeholder</Text>
        <Stack direction={'row'} spacing={3}>
          <SocialButton label="Twitter" href="https://twitter.com/777Chrisis">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Discord" href="https://discordapp.com/users/144553272781438978">
            <FaDiscord />
          </SocialButton>
          <SocialButton label="GitHub" href="https://github.com/TheChrisis">
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
