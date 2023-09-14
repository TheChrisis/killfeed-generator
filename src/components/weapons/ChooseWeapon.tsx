import { Select, SimpleGrid, Stack } from '@chakra-ui/react';
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
  const [selectedCategory, setSelectedCategory] = useState<WeaponCategory>('Sniper Rifles');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as WeaponCategory);
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
        <SimpleGrid spacing="4" columns={{ base: 1, sm: 2, md: 4 }}>
          {weaponsWithIcons[selectedCategory].map((weapon) => (
            <Weapon key={weapon.name} weapon={weapon} onWeaponSelect={onWeaponSelect} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default ChooseWeapon;
