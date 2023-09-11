import React, { FC } from 'react';
import { Weapon as WeaponComp } from '../../interfaces/killfeed.interface';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface WeaponProps {
  weapon: WeaponComp;
  onWeaponSelect: (weapon: WeaponComp) => void;
}

const Weapon: FC<WeaponProps> = (prop) => {
  const theWeapon = prop.weapon;
  const { onWeaponSelect } = prop;

  return (
    <Card
      variant="outline"
      onClick={() => onWeaponSelect(theWeapon)}
      _hover={{ background: 'inherit', transition: 'background .3s', cursor: 'pointer' }}
    >
      <CardBody>
        <Image src={theWeapon.iconPath} alt="name" style={{ transform: 'scaleX(-1)' }} />
        <Heading size="md" marginTop={5}>
          {theWeapon.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default Weapon;
