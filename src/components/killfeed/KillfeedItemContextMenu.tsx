import { Button, IconButton, Stack, Tooltip, useColorModeValue, useToast } from '@chakra-ui/react';
import { FC } from 'react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import useKillfeedStore from '../../stores/Killfeed.store';
import { Kill } from '../../interfaces/killfeed.interface';

interface KillfeedItemContextMenuProps {
  kill: Kill;
}

const KillfeedItemContextMenu: FC<KillfeedItemContextMenuProps> = ({ kill }) => {
  const { removeKillFromFeed, setActiveKill } = useKillfeedStore();
  const toast = useToast();

  const handleRemove = () => {
    removeKillFromFeed(kill);
    toast({
      title: `${kill.killer} => ${kill.victim} Item removed successfully`,
      variant: 'subtle',
      status: 'success',
    });
  };

  const handleEdit = () => {
    setActiveKill(kill);
  };

  return (
    <Stack
      direction="row"
      rowGap="3"
      position="absolute"
      left="0"
      top="-6px"
      visibility="hidden"
      opacity="0"
      transition="opacity .3s"
      _groupHover={{ visibility: 'visible', opacity: 1 }}
    >
      <Tooltip label="Edit Item" placement="top">
        <IconButton
          aria-label="Edit item"
          onClick={handleEdit}
          variant="solid"
          bg={useColorModeValue('blackAlpha.600', 'blackAlpha.600')}
          icon={<EditIcon color="whiteAlpha.900" />}
          _hover={{ background: 'blackAlpha.800' }}
        />
      </Tooltip>
      <Tooltip label="Delete Item" placement="top">
        <IconButton
          aria-label="Delete item"
          onClick={handleRemove}
          variant="solid"
          bg={useColorModeValue('blackAlpha.600', 'blackAlpha.600')}
          icon={<DeleteIcon color="whiteAlpha.900" />}
          _hover={{ background: 'blackAlpha.800' }}
        />
      </Tooltip>
    </Stack>
  );
};

export default KillfeedItemContextMenu;
