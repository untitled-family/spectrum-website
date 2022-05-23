import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Spinner,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import toImg from 'react-svg-to-image';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SpectrumSvg } from './SpectrumSvg';

export const SpectrumExportModal = ({ layers, detail }) => {
  const [value, setValue] = useState(42);
  const [base64, setBase64] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const exportToPng = () => {
    toImg('#kinetic-export', 'Kinetic Spectrum');
  };

  const toBase64 = () => {
    const svg = document.querySelector('#kinetic-export');

    if (svg) {
      const s = new XMLSerializer().serializeToString(svg);
      const encodedData = window.btoa(s);

      setBase64(encodedData);
    }
  };

  useEffect(() => {
    toBase64();
  }, [value]);

  return (
    <>
      <Button
        height="32px"
        px={4}
        lineHeight={1}
        fontSize="sm"
        borderRadius="lg"
        colorScheme="black"
        border="1px solid rgba(255,255,255,0.2)"
        _hover={{ borderColor: 'rgba(255,255,255,0.5)' }}
        background="transparent"
        onClick={onOpen}
      >
        Download as PNG
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
        <ModalContent
          borderRadius="2xl"
          py={10}
          px={8}
          textAlign="center"
          alignSelf="center"
          my={0}
          color="black.500"
        >
          <Text>
            Select a specific moment of your <strong>Spectrum’s</strong>{' '}
            timeline to export as a PNG.
          </Text>
          <Box my={8}>
            <SpectrumSvg
              id="kinetic-export"
              layers={layers}
              detail={detail}
              time={value}
            />
          </Box>
          <Flex mb={8}>
            <Slider
              aria-label="slider"
              defaultValue={42}
              onChange={(val) => setValue(val)}
              min={0}
              max={69}
            >
              <SliderTrack bg="blackAlpha.100">
                <SliderFilledTrack bg="black" />
              </SliderTrack>
              <SliderThumb
                w="16px"
                h="16px"
                bg="white"
                border="2px solid black"
                borderColor="black"
                boxShadow="dark-lg"
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  bg: 'black',
                  borderRadius: 'full',
                  width: '8px',
                  height: '8px',
                  margin: '-4px 0 0 -4px',
                }}
              />
            </Slider>
            <Text ml={4} w="24px">
              {value}s
            </Text>
          </Flex>
          <Button
            height="47px"
            borderRadius="xl"
            colorScheme="black"
            fontWeight="normal"
            w="full"
            // onClick={exportToPng}
            download="kinetic-spectrum.png"
            href={`data:image/png;base64,${base64}`}
          >
            Download as PNG
          </Button>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

SpectrumSvg.propTypes = {
  layers: PropTypes.array.isRequired,
  detail: PropTypes.object,
  time: PropTypes.number,
};