import React, { FC, useRef } from 'react';
import { Killfeed as KillfeedType } from '../../interfaces/killfeed.interface';
import { Box, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import KillfeedItem from './KillfeedItem';
import { useColorModeValue } from '@chakra-ui/color-mode';
import html2canvas from 'html2canvas';

interface KillfeedProps {
  killfeed: KillfeedType;
}

const Killfeed: FC<KillfeedProps> = ({ killfeed }) => {
  const killfeedRef = useRef(null);

  const generateKillfeedImage = async () => {
    if (!killfeedRef.current) {
      return;
    }

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    const canvas = await html2canvas(killfeedRef.current, {
      backgroundColor: null,
      logging: true,
      onclone: (document, element) => {
        console.log(document, element);
      },
    });

    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.setAttribute('download', 'killfeed.png');
    a.setAttribute('href', image);
    a.click();
    a.remove();
    style.remove();
  };

  return (
    <>
      {killfeed.length > 0 && (
        <>
          <Box
            backgroundImage={`url(src/assets/backgrounds/kingscanyon.webp)`}
            backgroundColor="transparent"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItems="flex-end"
            display="flex"
            flexDirection="column"
            borderRadius="lg"
            color={useColorModeValue('white', 'white')}
          >
            <Stack
              width="fit-content"
              py="20"
              px="20"
              alignItems="flex-end"
              spacing="1px"
              ref={killfeedRef}
            >
              {killfeed.map((killfeed, index) => (
                <KillfeedItem kill={killfeed} key={index} />
              ))}
            </Stack>
          </Box>
          <Button onClick={generateKillfeedImage} mt={25}>
            Download Killfeed
          </Button>
        </>
      )}
    </>
  );
};

export default Killfeed;
