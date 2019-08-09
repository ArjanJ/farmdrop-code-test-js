import React from 'react';

export const ProductVariants = ({ displayName, variants = [] }) => {
  if (!variants.length && displayName) {
    return <p>{displayName}</p>;
  }

  return (
    <select>
      {variants.map(({ measurement }) => (
        <option key={measurement.displayName} value={measurement.displayName}>
          {measurement.displayName}
        </option>
      ))}
    </select>
  );
};
