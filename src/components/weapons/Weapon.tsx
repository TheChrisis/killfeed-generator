import { FC } from 'react';
import { Weapon as WeaponComp } from '../../interfaces/killfeed.interface';
import { Box, Heading } from '@chakra-ui/react';
import useKillfeedStore from '../../stores/Killfeed.store';
import WeaponImage from './WeaponImage';

interface WeaponProps {
  weapon: WeaponComp;
  onWeaponSelect: (weapon: WeaponComp) => void;
}

const Weapon: FC<WeaponProps> = (prop) => {
  const { activeKill } = useKillfeedStore();

  const theWeapon = prop.weapon;
  const { onWeaponSelect } = prop;

  const isSelected = activeKill.weapon.name === theWeapon.name;

  return (
    <Box
      as="button"
      onClick={() => onWeaponSelect(theWeapon)}
      bg={isSelected ? 'black' : 'gray.900'}
      borderRadius="lg"
      padding="2"
      color="white"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{
        bg: 'black',
        transform: 'scale(1.1)',
      }}
      _focus={{
        boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <WeaponImage weapon={theWeapon} maxH="50" />
      <Heading size="md" mt="5">
        {theWeapon.name}
      </Heading>
    </Box>
  );
};

export default Weapon;
