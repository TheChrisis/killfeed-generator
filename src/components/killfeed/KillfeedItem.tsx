import { FC } from 'react';
import { Kill } from '../../interfaces/killfeed.interface';
import { Box, Stack } from '@chakra-ui/layout';
import KillfeedItemContextMenu from './KillfeedItemContextMenu';
import useKillfeedStore from '../../stores/Killfeed.store';
import WeaponImage from '../weapons/WeaponImage';

interface KillfeedItemProps {
  kill: Kill;
}

const KillfeedItem: FC<KillfeedItemProps> = ({ kill }) => {
  const { activeKill } = useKillfeedStore();

  return (
    <Box position="relative" role="group" pl="100px">
      <KillfeedItemContextMenu kill={kill} />
      <Stack
        bg="blackAlpha.500"
        border={activeKill.id === kill.id ? '1px solid green' : undefined}
        transition="all .3s"
        direction="row"
        spacing="5px"
        borderRadius="sm"
        px="5px"
        pt="5px"
        pb="3px"
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
    </Box>
  );
};

export default KillfeedItem;
