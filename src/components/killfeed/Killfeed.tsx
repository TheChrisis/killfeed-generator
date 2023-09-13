import React from 'react';
import { Killfeed as KillfeedType } from '../../interfaces/killfeed.interface';
import { Box, Stack, Text } from '@chakra-ui/layout';
import KillfeedItem from './KillfeedItem';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useKillfeedComputedProperties } from '../../stores/Killfeed.store';

interface KillfeedProps {
  killfeed: KillfeedType;
  fileName: string;
}

const Killfeed = React.forwardRef<HTMLDivElement, KillfeedProps>(({ killfeed }, ref) => {
  const { killfeedItemCount } = useKillfeedComputedProperties();

  const hasNoKillfeedYet = killfeedItemCount === 0;

  return (
    <Box
      backgroundImage={'url(backgrounds/kingscanyon.webp)'}
      backgroundColor="transparent"
      backgroundRepeat="no-repeat"
      backgroundPosition="top right"
      display="flex"
      flexDirection="column"
      borderRadius="lg"
      color={useColorModeValue('white', 'white')}
      height="500px"
      overflowY="auto"
      alignItems={hasNoKillfeedYet ? 'center' : 'flex-end'}
      justifyContent={hasNoKillfeedYet ? 'center' : undefined}
    >
      {hasNoKillfeedYet ? (
        <Text
          _light={{
            bg: 'whiteAlpha.600',
            color: 'black',
          }}
          _dark={{
            bg: 'blackAlpha.800',
          }}
          px="10"
          py="5"
          borderRadius="lg"
          fontSize="2xl"
          textAlign="center"
          mx={{ base: 5 }}
        >
          The Killfeed is currently empty. <br /> Start building your own Killfeed!
        </Text>
      ) : (
        <Stack
          width="max-content"
          py={{ base: 10, md: 14, lg: 20 }}
          px={{ base: 10, md: 14, lg: 20 }}
          alignItems="flex-end"
          spacing="1px"
          ref={ref}
        >
          {killfeed.map((killfeed, index) => (
            <KillfeedItem kill={killfeed} key={index} />
          ))}
        </Stack>
      )}
    </Box>
  );
});

export default Killfeed;
