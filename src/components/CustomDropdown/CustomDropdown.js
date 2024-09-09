import React, { useEffect } from "react";

function StandardDropdown({
  options,
  label,
  placeholder,
  isMulti,
  onChange,
  value,
  errorFlag,
  errorMessage,
  style,
}) {
  let defaultValues = [];
  if (value != "" && value != undefined) {
    if (value.value != undefined) {
      defaultValues.push(value.value);
    } else {
      if (value != 0) {
        value.map((val) => {
          defaultValues.push(val.value);
        });
      }
    }
  }

  return (
    <select
      className="input"
      isInvalid={errorFlag}
      errorMessage={errorMessage}
      labelPlacement="outside"
      placeholder={placeholder}
      selectionMode={isMulti ? "multiple" : "single"}
      value={value}
      selectedKeys={defaultValues}
      defaultSelectedKeys={defaultValues}
      // className="max-w-xs"
      style={{
        ...style,
      }}
      onChange={(e) => {
        let data = e.target.value.split(",");
        let tempFinalData = [];
        data.map((val) => {
          const foundData = options.find((item) => item.value == val);
          tempFinalData.push(foundData);
        });

        let finalData;
        if (isMulti) {
          finalData = tempFinalData;
        } else {
          finalData = tempFinalData[0];
        }
        onChange(finalData);
      }}
    >
      {options &&
        options.map((val) => (
          <option
            key={val.value}
            value={{ value: val.value, label: val.label }}
          >
            {val.label}
          </option>
        ))}
      {options == undefined ||
        (options.length == 0 && (
          <option key={"0"} value={"0"} isDisabled>
            No Option
          </option>
        ))}
    </select>
  );
}

export default StandardDropdown;
