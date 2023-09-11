import { Select, SimpleGrid, SlideFade, Stack, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { weaponsWithIcons } from './weapons';
import {
  Kill,
  KillKey,
  WeaponCategory,
  Weapon as WeaponType,
} from '../../interfaces/killfeed.interface';
import Weapon from './Weapon';

interface ChooseWeaponProps {
  setWeapon: (key: KillKey, value: Kill[KillKey]) => void;
}

const ChooseWeapon: FC<ChooseWeaponProps> = ({ setWeapon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCategory, setSelectedCategory] = useState<WeaponCategory>('Sniper Rifles');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onClose();
    setSelectedCategory(e.target.value as WeaponCategory);
    onOpen();
  };

  const onWeaponSelect = (weapon: WeaponType) => {
    setWeapon('weapon', weapon);
  };

  return (
    <Stack spacing="10">
      <Select
        variant="filled"
        placeholder="Choose Weapon Category"
        value={selectedCategory}
        onChange={handleChange}
      >
        {Object.keys(weaponsWithIcons).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      {weaponsWithIcons[selectedCategory] && (
        <SimpleGrid spacing="4" templateColumns="repeat(auto-fill, minmax(180px, 1fr))">
          <SlideFade in={isOpen || !!weaponsWithIcons[selectedCategory]}>
            {weaponsWithIcons[selectedCategory].map((weapon) => (
              <Weapon key={weapon.name} weapon={weapon} onWeaponSelect={onWeaponSelect} />
            ))}
          </SlideFade>
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default ChooseWeapon;
