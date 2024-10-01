export const lightenColor = (hex: string, percent: number) => {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  const redHex = r.toString(16).padStart(2, "0");
  const greenHex = g.toString(16).padStart(2, "0");
  const blueHex = b.toString(16).padStart(2, "0");
  const alphaHex = Math.round(percent * 255)
    .toString(16)
    .padStart(2, "0");

  const hexValue = `#${redHex}${greenHex}${blueHex}${alphaHex}`;

  return `linear-gradient(90deg, ${hex} 4px, ${hexValue.toUpperCase()} 4px)`;
};
