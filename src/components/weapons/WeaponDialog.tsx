import {
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import ChooseWeapon from './ChooseWeapon';
import { Kill, KillKey } from '../../interfaces/killfeed.interface';

interface WeaponDialogProps {
  onClose: () => void;
  setWeapon: (key: KillKey, value: Kill[KillKey]) => void;
  isOpen: boolean;
}

const WeaponDialog: FC<WeaponDialogProps> = ({ onClose, isOpen, setWeapon }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose Weapon</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ChooseWeapon setWeapon={setWeapon} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WeaponDialog;
