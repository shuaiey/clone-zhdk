/* eslint-disable no-param-reassign */
export function rgbToArray(rgbString) {
  const valuesOnly = rgbString.replace("rgb(", "").replace(")", "").replace(";", "");

  return valuesOnly.split(",").map((v) => parseInt(v, 10));
}

export function transitionNumvericValue(startValue, targetValue, progress) {
  return startValue + (targetValue - startValue) * progress;
}

export function transitionRGB(startRGB, targetRGB, progress) {
  startRGB = rgbToArray(startRGB);
  targetRGB = rgbToArray(targetRGB);

  const newValues = [3];
  let newValuesIndex = 0;

  for (let i = 0; i < 3; i++) {
    newValues[newValuesIndex++] = Math.round(
      transitionNumvericValue(
        parseFloat(startRGB[i]),
        parseFloat(targetRGB[i]),
        progress
      )
    );
  }

  return `rgb(${newValues.join(", ")})`;
}
