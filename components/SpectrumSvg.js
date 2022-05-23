import { Box } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { SpectrumBorder } from './SpectrumBorder';

export const SpectrumSvg = ({ layers, detail, time, ...props }) => (
  <>
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      borderRadius="full"
      flex="1"
      maxH="70vh"
      maxW="85vw"
      mx="auto"
      {...props}
    >
      <circle cx="500" cy="500" r="500" fill="#fff" />

      {layers.map((layer, index) => {
        const rotation = time * parseInt(layer.speed);
        return (
          <>
            <g
              style={{ mixBlendMode: 'multiply' }}
              transform={!time ? null : `rotate(${rotation} 500 500)`}
            >
              <circle cx="500" cy="500" r="500" fill={`url(#layer_${index})`} />
              {!time && time !== 0 && (
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="360 500 500"
                  to="0 500 500"
                  dur={`${layer.speed}s`}
                  additive="sum"
                  repeatCount="indefinite"
                />
              )}
            </g>
            <defs>
              <radialGradient
                id={`layer_${index}`}
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(500) rotate(90) scale(1000)"
              >
                <stop stopColor={layer.color} offset="0%" />
                <stop stopColor={layer.color} offset="100%" stopOpacity="0" />
              </radialGradient>
            </defs>
          </>
        );
      })}
      <g style={{ mixBlendMode: 'difference' }}>
        <SpectrumBorder detail={detail.raw} />
      </g>
    </Box>
  </>
);

SpectrumSvg.propTypes = {
  layers: PropTypes.array.isRequired,
  detail: PropTypes.object,
  time: PropTypes.number,
};
