import { FC } from 'react';
import { Kill } from '../../interfaces/killfeed.interface';
import { Box, Stack } from '@chakra-ui/layout';
import WeaponImage from '../weapons/WeaponImage';

interface KillfeedItemProps {
  kill: Kill;
  isEditing: boolean;
}

const KillfeedItem: FC<KillfeedItemProps> = ({ kill, isEditing }) => {
  return (
    <Stack
      bg={isEditing ? 'blackAlpha.800' : 'blackAlpha.500'}
      transition="all .3s"
      direction="row"
      spacing="5px"
      borderRadius="sm"
      px="5px"
      pt="5px"
      pb="3px"
      ml="2"
      width="max-content"
      backdropBlur="5xl"
      fontFamily="'Teko', serif"
      fontSize="23px"
      lineHeight={1}
      _groupHover={{ background: 'blackAlpha.800' }}
      alignItems="center"
    >
      <Box>{kill.killer}</Box>
      <WeaponImage weapon={kill.weapon} maxH="25px" maxW="75" />
      <Box>{kill.victim}</Box>
    </Stack>
  );
};

export default KillfeedItem;
