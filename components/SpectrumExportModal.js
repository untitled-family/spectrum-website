import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import * as Sentry from '@sentry/nextjs';
import axios from 'axios';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { SpectrumSvg } from './SpectrumSvg';

function _arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export const SpectrumExportModal = ({ layers, detail }) => {
  const [loading, setLoading] = useState(false);
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const [value, setValue] = useState(42);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const exportToPng = () => {
    setLoading(true);

    axios
      .post('/api/export', {
        svg: new XMLSerializer().serializeToString(svgRef.current),
      })
      .then(function (response) {
        setLoading(false);
        const a = document.createElement('a'); // Create <a>
        a.href = `data:image/png;base64,${_arrayBufferToBase64(
          response.data.png.data
        )}`;
        a.download = 'kinetic-spectrum.png';
        a.click();
      })
      .catch(function (error) {
        setLoading(false);
        Sentry.captureException(error);
      });
  };

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
            Select a specific moment of your <strong>Spectrum's</strong>{' '}
            timeline to export as a PNG.
          </Text>
          <Box my={8}>
            <SpectrumSvg
              ref={svgRef}
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
            <Text fontWeight="semibold" ml={4} minW="28px">
              {value}s
            </Text>
          </Flex>
          <Button
            height="47px"
            borderRadius="xl"
            colorScheme="black"
            fontWeight="normal"
            w="full"
            onClick={exportToPng}
            isLoading={loading}
          >
            Download as PNG
          </Button>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

SpectrumExportModal.propTypes = {
  layers: PropTypes.array.isRequired,
  detail: PropTypes.object,
};
