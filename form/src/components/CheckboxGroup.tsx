import React from "react";

type CheckboxGroupProps = {
  label: string;
  options: string[];
  values: string[];
  onChange: (value: string[]) => void;
};
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,options, values, onChange,
}) => {
   const toggleValue = (value: string) => {
    onChange(
      values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value]
    );
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={values.includes(option)}
              onChange={() => toggleValue(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;