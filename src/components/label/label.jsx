import React from 'react';

const Label = ({label}) => (
  <div className="py-1">
    <span
      className="inline-block rounded-full py-1 px-3 text-sm font-semibold text-white mr-2"
      style={{
        background: `#${label.color}`,
      }}
    >
      <span>{label.name}</span>
    </span>
  </div>
)

export default Label;