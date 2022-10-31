import React from "react";
import CreatableSelect from "react-select/creatable";

function DropDownMenu({ options, onSelect }) {
  return (
    <CreatableSelect
      options={options}
      closeMenuOnSelect={true}
      name="Filters by region"
      onChange={onSelect}
      isClearable={true}
    />
  );
}

export default DropDownMenu;
