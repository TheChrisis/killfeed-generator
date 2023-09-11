import { FC, useState } from 'react';
import { Kill, KillKey, Killfeed } from '../interfaces/killfeed.interface';
import { Badge, Box, Button, Flex, Image, Input, Stack, useDisclosure } from '@chakra-ui/react';
import WeaponDialog from './weapons/WeaponDialog';

const KillfeedForm: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentKillfeed, setCurrentKillfeed] = useState<Killfeed | null>(null);
  const [kill, setKill] = useState({
    killer: '',
    victim: '',
  } as Kill);

  const editKill = (key: KillKey, value: Kill[KillKey]) => {
    setKill((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Flex gap="3" marginTop={50}>
        <Input
          variant="filled"
          placeholder="Killer"
          value={kill.killer}
          onChange={(e) => editKill('killer', e.target.value)}
        />

        <Button onClick={onOpen} flex="none">
          Choose Weapon
        </Button>

        <Input
          variant="filled"
          placeholder="Victim"
          value={kill.victim}
          onChange={(e) => editKill('victim', e.target.value)}
        />
      </Flex>

      <WeaponDialog onClose={onClose} isOpen={isOpen} setWeapon={editKill} />

      <br />
      <Stack direction="row">
        <Badge fontSize="20">{kill.killer || '__________'}</Badge>
        <Image style={{ transform: 'scaleX(-1)' }} width="100px" src={kill.weapon?.iconPath} />
        <Badge fontSize="20">{kill.victim || '__________'}</Badge>
      </Stack>
    </>
  );
};

export default KillfeedForm;
