import { Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Weapon } from '../../interfaces/killfeed.interface';

interface WeaponImageProps {
  weapon: Weapon;
  width?: string;
  height?: string;
  maxW?: string;
  maxH?: string;
}

const WeaponImage: FC<WeaponImageProps> = ({ weapon, width, height, maxW, maxH }) => {
  return (
    <Image
      src={weapon.iconPath}
      alt={weapon.name}
      transform="auto"
      scaleX={-1}
      width={width}
      height={height}
      maxW={maxW}
      maxH={maxH}
    />
  );
};

export default WeaponImage;
