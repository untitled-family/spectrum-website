import { Box } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export const SpectrumSvg = ({ layers, ...props }) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    // xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1000 1000"
    {...props}
  >
    <circle cx="500" cy="500" r="500" fill="#fff" />

    {layers.map((layer, index) => (
      <>
        <g style={{ 'mix-blend-mode': 'multiply' }}>
          <circle cx="500" cy="500" r="500" fill={`url(#layer_${index})`} />
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
    ))}
    <g style={{ 'mix-blend-mode': 'difference' }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M500 960C754.051 960 960 754.051 960 500C960 245.949 754.051 40 500 40C245.949 40 40 245.949 40 500C40 754.051 245.949 960 500 960ZM500 980C765.097 980 980 765.097 980 500C980 234.903 765.097 20 500 20C234.903 20 20 234.903 20 500C20 765.097 234.903 980 500 980ZM500 920C731.96 920 920 731.96 920 500C920 268.04 731.96 80 500 80C268.04 80 80 268.04 80 500C80 731.96 268.04 920 500 920ZM500 940C743.005 940 940 743.005 940 500C940 256.995 743.005 60 500 60C256.995 60 60 256.995 60 500C60 743.005 256.995 940 500 940ZM880 500C880 709.868 709.868 880 500 880C290.132 880 120 709.868 120 500C120 290.132 290.132 120 500 120C709.868 120 880 290.132 880 500ZM900 500C900 720.914 720.914 900 500 900C279.086 900 100 720.914 100 500C100 279.086 279.086 100 500 100C720.914 100 900 279.086 900 500Z"
        fill="white"
      />
    </g>
  </Box>
);

SpectrumSvg.propTypes = {
  layers: PropTypes.array.isRequired,
};
