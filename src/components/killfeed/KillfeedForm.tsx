import React, { FC, useState } from 'react';
import { Button, Flex, Input, useDisclosure } from '@chakra-ui/react';
import { Kill, KillKey, Killfeed as KillfeedType } from '../../interfaces/killfeed.interface';
import WeaponDialog from '../weapons/WeaponDialog';
import useLocalStorage, { LocalStorageKey } from '../../hooks/useLocalStorage';
import Killfeed from './Killfeed';

const KillfeedForm: FC = () => {
  const [storedKillfeed, setStoredKillfeed] = useLocalStorage<KillfeedType>(
    LocalStorageKey.apex,
    [],
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentKillfeed, setCurrentKillfeed] = useState<KillfeedType>(storedKillfeed);
  const [kill, setKill] = useState({
    killer: '',
    victim: '',
    weapon: {},
    killType: 'fullfinish',
  } as Kill);

  const isDisabled = !kill.killer || !kill.victim || !kill.weapon.name;

  const editKill = (key: KillKey, value: Kill[KillKey]) => {
    setKill((prev) => ({ ...prev, [key]: value }));
  };

  const addToKillfeed = () => {
    setCurrentKillfeed((prev) => [...prev, kill]);
    setStoredKillfeed((prev) => [...prev, kill]);
    setKill({
      killer: '',
      victim: '',
      weapon: {},
      killType: 'fullfinish',
    } as Kill);
  };

  return (
    <>
      <Flex gap="3" marginBottom={25}>
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

        <Button onClick={addToKillfeed} flex="none" isDisabled={isDisabled}>
          Add to Killfeed
        </Button>
      </Flex>

      <WeaponDialog onClose={onClose} isOpen={isOpen} setWeapon={editKill} />

      <Killfeed killfeed={currentKillfeed} />
    </>
  );
};

export default KillfeedForm;
