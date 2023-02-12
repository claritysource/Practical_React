import React from 'react';

const Dropdown = ({ label, items, value, valueProperty, displayProperty, handleOnChange, width }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        className="custom-select"
        style={{ width }}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        {items.map(item => (
          <option key={item[valueProperty]} value={item[valueProperty]}>
            {item[displayProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
