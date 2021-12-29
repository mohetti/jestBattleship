export function nodeAttributeArray(dataPoint: string) {
  return Array.from(
    document.querySelector(`[data-coord='${dataPoint}']`)!.attributes
  );
}

export function hasShipCellEffect(x: AttrProps) {
  return x.value === 'ship-cell';
}

export function hasOccupiedEffect(x: AttrProps) {
  return x.value === 'occupied-cell';
}

type AttrProps = {
  value: string | undefined;
};
