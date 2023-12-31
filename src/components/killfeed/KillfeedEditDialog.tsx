import {
  Button,
  ButtonGroup,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ImageSize, ImageSizeKey } from './KillfeedForm';

interface KillfeedEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  imageSize: ImageSize;
  setImageSize: React.Dispatch<React.SetStateAction<ImageSize>>;
}

const KillfeedEditDialog: FC<KillfeedEditDialogProps> = ({
  fileName,
  setFileName,
  onClose,
  isOpen,
  onConfirm,
  imageSize,
  setImageSize,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={{ base: 'sm', sm: 'sm', md: 'md' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Killfeed</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Stack spacing="4">
            <Input
              variant="filled"
              placeholder="Enter a filename (optional)"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
            <Select
              variant="filled"
              placeholder="Choose Image Size"
              value={imageSize}
              onChange={(e) => setImageSize(ImageSize[e.target.value as ImageSizeKey])}
            >
              <option value={ImageSize.default}>Default (as seen on screen)</option>
              <option value={ImageSize.large}>Large</option>
              <option value={ImageSize.xlarge}>Humongous</option>
            </Select>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button onClick={onConfirm} variant="solid">
              Download Killfeed
            </Button>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default KillfeedEditDialog;
