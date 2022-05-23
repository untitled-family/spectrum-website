export const details = [
  'common',
  'rare',
  'epic',
  'legendary',
  'impossible',
  'perfect',
  'founder',
];

export const getDetail = (attributes) => {
  const _d = attributes.find((a) => a.trait_type === 'Detail').value;
  const detail = details.find((d) => _d.toLocaleLowerCase().includes(d));

  return {
    raw: _d,
    type: detail.toLocaleLowerCase(),
  };
};

export const getLayers = (attributes) => {
  const _c = attributes.filter((a) => a.trait_type === 'Layer Color');
  const _s = attributes.filter((a) => a.trait_type === 'Layer Speed');
  const layers = [];

  _c.forEach((c, index) => {
    layers.push({
      color: `rgb(${c.value})`,
      speed: _s[index].value,
    });
  });

  return layers;
};
