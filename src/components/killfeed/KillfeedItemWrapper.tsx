import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex,
  FocusLock,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import KillfeedItem from './KillfeedItem';
import { Kill } from '../../interfaces/killfeed.interface';
import useKillfeedStore from '../../stores/Killfeed.store';

const TextInput = React.forwardRef<
  HTMLInputElement,
  { id: string; label: string; defaultValue: string }
>(({ label, id, defaultValue }, ref) => {
  return (
    <FormControl>
      <FormLabel
        htmlFor={id}
        _light={{
          color: 'black',
        }}
      >
        {label}
      </FormLabel>
      <Input
        ref={ref}
        id={id}
        defaultValue={defaultValue}
        variant="filled"
        _light={{
          color: 'black',
        }}
      />
    </FormControl>
  );
});

const Form: FC<{
  firstFieldRef: React.RefObject<HTMLInputElement>;
  onCancel: () => void;
  kill: Kill;
}> = ({ firstFieldRef, onCancel, kill }) => {
  return (
    <Stack spacing={2}>
      <TextInput
        label="Killer Player Name"
        id="killer-name"
        ref={firstFieldRef}
        defaultValue={kill.killer}
      />
      <TextInput label="Victim Player Name" id="victim-name" defaultValue={kill.victim} />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled>Save</Button>
      </ButtonGroup>
    </Stack>
  );
};

interface KillfeedItemWrapper {
  kill: Kill;
}

const KillfeedItemWrapper: FC<KillfeedItemWrapper> = ({ kill }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { removeKillFromFeed } = useKillfeedStore();
  const toast = useToast();

  const firstFieldRef = useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    removeKillFromFeed(kill);
    toast({
      title: 'Item removed successfully',
      variant: 'subtle',
      status: 'success',
    });
  };

  return (
    <Flex role="group">
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={false}
        placement="auto"
        offset={[144, 0]}
        size={{ base: 'full' }}
      >
        <PopoverTrigger>
          <Tooltip label="Edit Item" placement="top">
            <IconButton
              size="sm"
              aria-label="Edit item"
              variant="solid"
              bg={
                isOpen
                  ? useColorModeValue('blackAlpha.800', 'blackAlpha.800')
                  : useColorModeValue('blackAlpha.600', 'blackAlpha.600')
              }
              icon={<EditIcon color="whiteAlpha.900" />}
              visibility={isOpen ? 'visible' : 'hidden'}
              opacity={isOpen ? 1 : 0}
              transition="opacity .3s"
              _groupHover={{ visibility: 'visible', opacity: 1, bg: 'blackAlpha.800' }}
              onClick={onOpen}
            />
          </Tooltip>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock restoreFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} kill={kill} />
          </FocusLock>
        </PopoverContent>
      </Popover>
      <Tooltip label="Delete Item" placement="top">
        <IconButton
          size="sm"
          aria-label="Delete item"
          onClick={handleRemove}
          variant="solid"
          bg={useColorModeValue('blackAlpha.600', 'blackAlpha.600')}
          icon={<DeleteIcon color="whiteAlpha.900" />}
          visibility={isOpen ? 'visible' : 'hidden'}
          opacity={isOpen ? 1 : 0}
          transition="opacity .3s"
          _groupHover={{ visibility: 'visible', opacity: 1, bg: 'blackAlpha.800' }}
          ml="2"
        />
      </Tooltip>
      <KillfeedItem kill={kill} isEditing={isOpen} />
    </Flex>
  );
};

export default KillfeedItemWrapper;
