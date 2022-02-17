import { Color } from 'three/src/math/Color';

export const media = {
  desktop: 1600,
  laptop: 1280,
  tablet: 1024,
  mobile: 696,
  mobileS: 320,
};

export const numToPx = num => `${num}px`;

export const rgbToThreeColor = rgb =>
  new Color(...rgb.split(' ').map(value => Number(value) / 255));
