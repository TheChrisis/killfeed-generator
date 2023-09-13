import { FC } from 'react';
import { Kill } from '../../interfaces/killfeed.interface';
import { Box, Stack } from '@chakra-ui/layout';

interface KillfeedItemProps {
  kill: Kill;
}

const KillfeedItem: FC<KillfeedItemProps> = ({ kill }) => {
  return (
    <Stack
      bg="rgba(0, 0, 0, 0.48)"
      direction="row"
      spacing="3px"
      borderRadius="0.125rem"
      pt="3px"
      px="5px"
      width="max-content"
      backdropBlur="5xl"
      fontFamily="'Teko', serif"
      fontSize="23px"
    >
      <Box>{kill.killer}</Box>
      <Box>[Finisher]</Box>
      <Box>{kill.victim}</Box>
    </Stack>
  );
};

export default KillfeedItem;
