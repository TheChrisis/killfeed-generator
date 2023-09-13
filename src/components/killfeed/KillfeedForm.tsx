import { FC, createRef, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useBoolean,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Kill, KillKey, Killfeed as KillfeedType } from '../../interfaces/killfeed.interface';
import WeaponDialog from '../weapons/WeaponDialog';
import useLocalStorage, { LocalStorageKey } from '../../hooks/useLocalStorage';
import Killfeed from './Killfeed';
import KillfeedEditDialog from './KillfeedEditDialog';
import html2canvas from 'html2canvas';
import useKillfeedStore, { useKillfeedComputedProperties } from '../../stores/Killfeed.store';
import { AddIcon } from '@chakra-ui/icons';
import useKeyUp from '../../hooks/useKeyUp';
import WeaponImage from '../weapons/WeaponImage';

export enum ImageSize {
  default = 'default',
  large = 'large',
  xlarge = 'xlarge',
}

export type ImageSizeKey = keyof typeof ImageSize;

const getImageSize = {
  [ImageSize.default]: null,
  [ImageSize.large]: 2,
  [ImageSize.xlarge]: 4,
};

const KillfeedForm: FC = () => {
  const { killfeed, addKillToFeed, activeKill, setActiveKill, resetActiveKill } =
    useKillfeedStore();
  const { isWeaponSelected } = useKillfeedComputedProperties();
  const [, setStoredKillfeed] = useLocalStorage<KillfeedType>(LocalStorageKey.apex, []);
  const {
    isOpen: isWeaponModalOpen,
    onOpen: onWeaponModalOpen,
    onClose: onWeaponModalClose,
  } = useDisclosure();
  const {
    isOpen: isKillfeedEditOpen,
    onOpen: onKillfeedEditOpen,
    onClose: onKillfeedEditClose,
  } = useDisclosure();
  const toast = useToast();

  const [isGeneratingScreenshot, setIsGeneratingScreenshot] = useBoolean(false);
  const [fileName, setFileName] = useState('');
  const [imageSize, setImageSize] = useState(ImageSize.default);

  const killfeedRef = createRef<HTMLDivElement>();

  const isAddKillDisabled = !activeKill.killer || !activeKill.victim || !activeKill.weapon.name;

  const setKillValue = (key: KillKey, value: Kill[KillKey]) => {
    setActiveKill({ [key]: value } as unknown as Kill);
  };

  const addToKillfeed = () => {
    addKillToFeed(activeKill);
    setStoredKillfeed((prev) => [...prev, activeKill]);
    resetActiveKill();
    toast({
      title: 'Item added to Killfeed',
      status: 'success',
    });
  };

  const generateKillfeedImage = async () => {
    if (!killfeedRef.current) {
      return;
    }
    onKillfeedEditClose();
    setIsGeneratingScreenshot.on();
    setStoredKillfeed(killfeed);

    // Fixes bug with wrong text offset
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    const canvas = await html2canvas(killfeedRef.current, {
      backgroundColor: null,
      onclone: (_, element) => {
        if (imageSize === ImageSize.default) {
          return;
        }
        element.style.transform = `scale(${getImageSize[imageSize]})`;
      },
    });

    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.setAttribute('download', `${fileName || 'killfeed'}-${ImageSize[imageSize]}.png`);
    a.setAttribute('href', image);
    a.click();
    a.remove();
    style.remove();
    setImageSize(ImageSize.default);
    setIsGeneratingScreenshot.off();
    toast({
      title: 'Killfeed Image sucessfully created. Check your downloads!',
      status: 'success',
    });
  };

  const handleKeyUp = (ev: KeyboardEvent): void => {
    if (ev.key === 'Enter' && !isAddKillDisabled) {
      addToKillfeed();
    }
  };

  useKeyUp(handleKeyUp);

  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')} borderRadius="xl" padding="5">
        <Flex gap="3" mb="25" direction={{ base: 'column', md: 'row' }}>
          <Input
            variant="filled"
            placeholder="Killer Player Name"
            value={activeKill.killer}
            onChange={(e) => setKillValue('killer', e.target.value)}
          />

          <Tooltip label={activeKill.weapon.name} isDisabled={!isWeaponSelected} placement="top">
            <Button
              onClick={onWeaponModalOpen}
              flex="none"
              maxWidth="100px"
              _light={{ bg: isWeaponSelected ? 'blackAlpha.800' : undefined }}
            >
              {isWeaponSelected ? <WeaponImage weapon={activeKill.weapon} /> : 'Weapon'}
            </Button>
          </Tooltip>

          <Input
            variant="filled"
            placeholder="Victim Player Name"
            value={activeKill.victim}
            onChange={(e) => setKillValue('victim', e.target.value)}
          />

          <Tooltip
            label="Add a Killer-, Victim Player Name and Weapon first"
            isDisabled={!isAddKillDisabled}
            placement="top"
          >
            <IconButton
              icon={<AddIcon />}
              onClick={addToKillfeed}
              aria-label="Add to killfeed"
              flex="none"
              isDisabled={isAddKillDisabled}
            />
          </Tooltip>
        </Flex>

        <Killfeed killfeed={killfeed} fileName={fileName} ref={killfeedRef} />

        <Flex justify="center">
          <Tooltip
            label="Why do you want to download an empty Killfeed?!"
            isDisabled={killfeed.length > 0}
          >
            <Button
              onClick={onKillfeedEditOpen}
              mt={25}
              isDisabled={!killfeed.length}
              isLoading={isGeneratingScreenshot}
              variant="solid"
              width="100%"
            >
              Download Killfeed
            </Button>
          </Tooltip>
        </Flex>
      </Box>

      <WeaponDialog
        onClose={onWeaponModalClose}
        isOpen={isWeaponModalOpen}
        setWeapon={setKillValue}
      />

      <KillfeedEditDialog
        isOpen={isKillfeedEditOpen}
        onClose={onKillfeedEditOpen}
        onConfirm={generateKillfeedImage}
        fileName={fileName}
        setFileName={setFileName}
        imageSize={imageSize}
        setImageSize={setImageSize}
      />
    </>
  );
};

export default KillfeedForm;
