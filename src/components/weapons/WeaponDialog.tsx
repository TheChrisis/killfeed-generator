import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { FC } from 'react';
import ChooseWeapon from './ChooseWeapon';
import { Kill, KillKey, Weapon } from '../../interfaces/killfeed.interface';
import useKillfeedStore, { useKillfeedComputedProperties } from '../../stores/Killfeed.store';

interface WeaponDialogProps {
  onClose: () => void;
  setWeapon: (key: KillKey, value: Kill[KillKey]) => void;
  isOpen: boolean;
}

const WeaponDialog: FC<WeaponDialogProps> = ({ onClose, isOpen, setWeapon }) => {
  const { activeKill } = useKillfeedStore();
  const { isWeaponSelected } = useKillfeedComputedProperties();
  const toast = useToast();

  const handleConfirm = () => {
    onClose();
    toast({
      title: `${activeKill.weapon.name} was selected`,
      status: 'success',
    });
  };

  const handleClose = () => {
    setWeapon('weapon', {} as Weapon);
    onClose();
  };

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
          <ButtonGroup>
            <Tooltip
              label="Select a weapon to confirm"
              isDisabled={isWeaponSelected}
              placement="top"
            >
              <Button variant="solid" onClick={handleConfirm} isDisabled={!isWeaponSelected}>
                Use selected weapon
              </Button>
            </Tooltip>
            <Button onClick={handleClose} variant="outline">
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WeaponDialog;
